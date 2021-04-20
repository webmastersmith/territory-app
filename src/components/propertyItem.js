const puppeteer = require('puppeteer');
const R = require('ramda')

module.exports = async function getProperty(IDs) {
	if (IDs.length === 0) return []
	const resolution = {
		x: 1280,
		y: 800,
	}
	const args = [
		'--disable-gpu',
		`--window-size=${resolution.x},${resolution.y}`,
		'--no-sandbox',
	]

	const browser = await puppeteer.launch({
		headless: true,
		// headless: false,
		handleSIGINT: false,
		args: args,
	})

	async function getPage(ids) {
		let arr = []

		for (let i = 0; i < ids.length; i++) {
			const page = await browser.newPage();
			page.setDefaultTimeout(5000);

			page.setViewport({
				width: resolution.x,
				height: resolution.y,
			})

			page.setRequestInterception(true);
			page.on('request', (req) => {
				(req.resourceType() == 'font' || req.resourceType() == 'image') ? req.abort() : req.continue();
			})

			let url = `https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=${ids[i]}&year=2020`
			await page.goto(url);

			// reload twice to set cookies. Then deed history will load into page.
			await page.reload()

			// Extract needed info from page.
			const propertyInfo = await page.evaluate(() => {
				// address
				const addressSelector = document.querySelector('table[summary] > tbody >tr:nth-child(12) > td:nth-child(2)')
				const addressTemp = addressSelector ? addressSelector.innerHTML : 'empty'
				const address = addressTemp.replace(/<br>.*?$/i, '')

				// Name
				const nameSelector = document.querySelector('table[summary] > tbody >tr:nth-child(16) > td:nth-child(2)')
				const name = nameSelector ? nameSelector.textContent : 'empty'

				// Mailing Address
				const mailingAddressSelector = document.querySelector('table[summary] > tbody >tr:nth-child(17) > td:nth-child(2)')
				let mailAdd = { zip: 'empty', state: 'empty', city: 'empty', mailingAddress: 'empty' }
				if (mailingAddressSelector) {
					const mailingAddressTemp = mailingAddressSelector.innerHTML
					const fixMA1 = mailingAddressTemp.replace(/<br>|,/ig, '')
					const fixMA2 = fixMA1.replace(/\s{2}/, ' ')
					const fixArr = fixMA2.split(' ')
					const [zippy, state, city, ...rest] = fixArr.reverse()
					const zip = zippy.replace(/-\d+$/i, '')
					const mailingAddress = rest.reverse().join(' ')
					mailAdd = { zip: zip.trim(), state: state.trim(), city: city.trim(), mailingAddress: mailingAddress.trim() }
				}

				// ownership
				const ownershipSelector = document.querySelector('table[summary] > tbody >tr:nth-child(17) > td:nth-child(4)')
				const ownership = ownershipSelector ? ownershipSelector.textContent : 'empty'

				// deed
				const deedSelector = document.querySelector('table#deedHistoryDetails_deedHistoryTable > tbody > tr:nth-child(2) > td > div.propertyDeedHistoryGrantee')
				const deed = deedSelector ? deedSelector.textContent : 'empty'


				return {
					name: name.trim(),
					deed: deed.trim(),
					address: address.trim(),
					...mailAdd,
					ownership: ownership.trim()
				}
			}) // end evaluate

			await page.close()

			console.log(`${i} of ${ids.length} finished! ${ids.length - (i + 1)} properties to go.`)
			arr.push({ id: ids[i], ...propertyInfo })
		} // end for loop
		return arr
	} // end function.

	try {
		return await getPage(IDs)
	} catch (e) {
		console.log('Final Catch Error: ------------------------', e);
	} finally {
		browser.close(); // executes after the return.
	}
}
