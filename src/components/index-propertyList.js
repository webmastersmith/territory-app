const propertyItem = require('./propertyItem')
const propertyList = require('./propertyList')
const fs = require('fs')


const items = [
	{
		id: '18782',
		address: '505 BOX FACTORY RD ',
		name: 'PEREZ MARIA DEL CARMEN',
		mailingAddress: '505 BOX FACTORY RD',
		city: 'DIBOLL',
		state: 'TX',
		zip: '75941',
		ownership: '100.0000000000%',
		warrantyDeed: 'PEREZ MARIA DEL CARMEN'
	},
]

async function propertyIDs(roadName) {
	const propList = await propertyList(roadName)
	// console.log(propList);

	const properties = await propertyItem(propList)
	console.log(properties);

	if (properties.length === 0) {
		let propString = JSON.stringify(properties)
		fs.writeFileSync(`./${roadName}.json`, propString, 'utf8')
		console.log(JSON.parse(propString));
	}

}

propertyIDs('box car rd')

