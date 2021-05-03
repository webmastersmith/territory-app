const initModel = {
	road: 'BOX CAR RD',
	waiting: false,
	error: null,
	cards: [],
	key: import.meta.env.VITE_KEY,
	// currentViewRoadIds: [],
	roadIds: [],
	owner: {
		landId: '23643',
		ownerId: '1173',
		allTrue: false,
		nameDeedSame: false,
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

	owners: [
		{
			landId: '23643',
			ownerId: '1173',
			name: 'LAMBERT SCOTT A ETUX RHONDA',
			deed: 'LAMBERT SCOTT A ETUX RHONDA',
			address: '1141 BOX CAR RD',
			zip: '75904',
			state: 'TX',
			city: 'LUFKIN',
			mailingAddress: '1141 BOX CAR RD',
			ownership: '100.0000000000%',
			urlOwnerDetails: 'https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=23643&year=2020',
			urlLandMap: 'https://propaccess.trueautomation.com/mapSearch/?cid=71&p=23643'
		  },
		  {
			landId: '23645',
			ownerId: '31362',
			name: 'COOK STACY RANDALL',
			deed: 'COOK STACY RANDALL',
			address: '1071 BOX CAR RD',
			zip: '75904',
			state: 'TX',
			city: 'LUFKIN',
			mailingAddress: '1071 BOX CAR RD',
			ownership: '100.0000000000%',
			urlOwnerDetails: 'https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=23645&year=2020',
			urlLandMap: 'https://propaccess.trueautomation.com/mapSearch/?cid=71&p=23645'
		  }	],
}

export default initModel
