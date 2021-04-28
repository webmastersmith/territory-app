const initModel = {
	road: 'box car rd',
	waiting: false,
	error: null,
	cards: [],
	key: import.meta.env.VITE_KEY,
	roadIds: [],
	owners: [
		{
			landId: '23645',
			ownerId: '185670',
			name: 'COOK STACY RANDALL',
			deed: 'COOK STACY RANDALL',
			address: '1071 BOX CAR RD',
			zip: '75904',
			state: 'TX',
			city: 'LUFKIN',
			mailingAddress: '1071 BOX CAR RD',
			ownership: '100.0000000000%',
			url: 'https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=23645&year=2020',
			urlMap: 'https://propaccess.trueautomation.com/mapSearch/?cid=71&p=23645'
		},
		{
			landId: '23651',
			ownerId: '185634',
			name: 'MAYO DON ETUX LINDA',
			deed: 'RAY JESSE J ETAL',
			address: '1031 BOX CAR RD',
			zip: '75904',
			state: 'TX',
			city: 'LUFKIN',
			mailingAddress: '1031 BOX CAR RD',
			ownership: '100.0000000000%',
			url: 'https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=23651&year=2020',
			urlMap: 'https://propaccess.trueautomation.com/mapSearch/?cid=71&p=23651'
		}
	],
}

export default initModel
