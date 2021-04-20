const puppeteer = require('puppeteer');
const R = require('ramda')
const fs = require('fs')

module.exports = async function propertySearch(roadName) {
	const resolution = {
		x: 1920,
		y: 1080,
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
	console.log('Created and opened browser');

	try {
		const page = await browser.newPage();

		await page.setViewport({
			width: resolution.x,
			height: resolution.y,
		})

		await page.setRequestInterception(true);
		page.on('request', (req) => {
			(req.resourceType() == 'font' || req.resourceType() == 'image') ? req.abort() : req.continue();
		})

		let url = `https://propaccess.trueautomation.com/clientdb/PropertySearch.aspx?cid=71`
		await page.goto(url, { waitUntil: 'networkidle0' });
		console.log(`Locating ${url}`);

		// click advanced page button. Goal: change page views to 250.
		await Promise.all([
			page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
			page.click('input#propertySearchOptions_advanced')
		]);
		console.log('Clicked Advanced button.');

		// find 'recordsPerPage' select box and select 250 results per page.
		await Promise.all([
			page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
			page.select('#propertySearchOptions_recordsPerPage', '250'),
			page.click('input#propertySearchOptions_advancedAdv')
		]);
		console.log('Selecting 250 items per page.');

		// back to main page add search results.
		await page.type('input#propertySearchOptions_searchText', roadName)
		console.log(`Returned to main page and input ${roadName} as search term.`);


		// click the search button.
		await Promise.all([
			page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
			page.click('input#propertySearchOptions_search')
		]);
		console.log('Clicked the search button.');

		// sort the values
		await Promise.all([
			page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
			page.click('input#propertySearchResults_sortPropIDButton')
		]);


		// needed to shuffle html sorting done above.
		await page.reload()
		console.log('Extracting all property id\'s')

		// grab all property id's from page.
		const propListItems = await page.evaluate(() => {
			const idSelectors = Array.from(document.querySelectorAll('td.screenOnly > span[prop_id]'))
			const idList = (idSelectors.length > 0) ? idSelectors.map(el => el.getAttribute('prop_id')) : []

			return idList
		})
		console.log('Done. Calling propertyItem.js with list.');
		return propListItems

	} finally {
		browser.close()
	}
}