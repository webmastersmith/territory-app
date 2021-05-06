const initModel = {
	road: 'BOX CAR RD',
	// road: '',
	waiting: false,
	error: null,
	// error: "Property List is empty. No lots were found for road: BOX CAR RD. Please make sure road name is spelled correctly and road is in Angelina County.",
	cards: [],
	key: import.meta.env.VITE_KEY,
	// key: '',
	// currentViewRoadIds: [],
	roadIds: [],

	owners: [
		{
			landId: '23643',
			ownerId: '1173',
			allTrue: true,
			nameDeedSame: true,
			addressSame: true,
			name: 'LAMBERT SCOTT A ETUX RHONDA',
			deed: 'LAMBERT SCOTT A ETUX RHONDA',
			physicalAddress: '1141 BOX CAR RD',
			physicalCity: 'LUFKIN',
			physicalState: 'TX',
			physicalZip: '75904',
			mailingAddress: '1141 BOX CAR RD',
			mailingCity: 'LUFKIN',
			mailingState: 'TX',
			mailingZip: '75904',
			ownership: '100.0000000000%',
			urlOwnerDetails: 'https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=23643&year=2020',
			urlLandMap: 'https://propaccess.trueautomation.com/mapSearch/?cid=71&p=23643'
		  },
		  {"landId":"18782","ownerId":"133532","allTrue":false,"nameDeedSame":true,"addressSame":false,"name":"PEREZ MARIA DEL CARMEN","deed":"PEREZ MARIA DEL CARMEN","physicalAddress":"505 BOX FACTORY RD","physicalCity":"","physicalState":"TX","physicalZip":"","mailingAddress":"505 BOX FACTORY RD","mailingCity":"DIBOLL","mailingState":"TX","mailingZip":"75941","ownership":"100.0000000000%","urlOwnerDetails":"https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=18782&year=2020","urlLandMap":"https://propaccess.trueautomation.com/mapSearch/?cid=71&p=18782"},
		  {"landId":"23643","ownerId":"1173","allTrue":true,"nameDeedSame":true,"addressSame":true,"name":"LAMBERT SCOTT A ETUX RHONDA","deed":"LAMBERT SCOTT A ETUX RHONDA","physicalAddress":"1141 BOX CAR RD","physicalCity":"LUFKIN","physicalState":"TX","physicalZip":"75904","mailingAddress":"1141 BOX CAR RD","mailingCity":"LUFKIN","mailingState":"TX","mailingZip":"75904","ownership":"100.0000000000%","urlOwnerDetails":"https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=23643&year=2020","urlLandMap":"https://propaccess.trueautomation.com/mapSearch/?cid=71&p=23643"},
		  {"landId":"23645","ownerId":"31362","allTrue":true,"nameDeedSame":true,"addressSame":true,"name":"COOK STACY RANDALL","deed":"COOK STACY RANDALL","physicalAddress":"1071 BOX CAR RD","physicalCity":"LUFKIN","physicalState":"TX","physicalZip":"75904","mailingAddress":"1071 BOX CAR RD","mailingCity":"LUFKIN","mailingState":"TX","mailingZip":"75904","ownership":"100.0000000000%","urlOwnerDetails":"https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=23645&year=2020","urlLandMap":"https://propaccess.trueautomation.com/mapSearch/?cid=71&p=23645"}  
		],
}

export default initModel
