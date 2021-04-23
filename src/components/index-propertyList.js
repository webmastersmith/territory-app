const propertyItem = require('./propertyItem')
const propertyList = require('./propertyList')
const fs = require('fs')
const IDs = [
	'18782', '23643', '23645', '23651'
]
async function propertyIDs(roadName) {
	// const propList = await propertyList(roadName)
	// console.log(propList);

	// const properties = await propertyItem(propList)
	const properties = await propertyItem(IDs)
	console.log(properties);

	if (properties.length > 0) {
		let propString = JSON.stringify(properties)
		fs.writeFileSync(`./${roadName}.json`, propString, 'utf8')
		console.log(JSON.parse(propString));
	}

}

propertyIDs('box car rd')

