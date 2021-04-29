const initModel = {
	road: 'box car rd',
	waiting: false,
	error: null,
	cards: [],
	key: import.meta.env.VITE_KEY,
	roadIds: [],
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
