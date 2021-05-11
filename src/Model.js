const initModel = {
	road: import.meta.env.VITE_ROAD,
	waiting: false,
	territory: '',
	print: false,
	error: null,
	bulkUpload: false,
	bulkIdArray: [],
	// error: "Property List is empty. No lots were found for road: BOX CAR RD. Please make sure road name is spelled correctly and road is in Angelina County.",
	key: import.meta.env.VITE_KEY,
	roadIds: [],
	owners: [],
}

export default initModel
