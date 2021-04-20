const propertyItem = require('./propertyItem')
const propertyList = require('./propertyList')
const fs = require('fs')

async function propertyIDs(roadName) {
	const propList = await propertyList(roadName)
	// console.log(propList);

	const properties = await propertyItem(propList)
	console.log(properties);

	if (properties.length > 0) {
		let propString = JSON.stringify(properties)
		fs.writeFileSync(`./${roadName}.json`, propString, 'utf8')
		console.log(JSON.parse(propString));
	}

}

propertyIDs('box car rd')

