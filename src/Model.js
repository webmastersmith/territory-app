const initModel = {
	road: import.meta.env.VITE_ROAD,
	waiting: false,
	territory: '',
	showOwnerProperty: false,
	ownerProperty: {},
	error: null,
	bulkUpload: false,
	bulkIdArray: [],
	key: import.meta.env.VITE_KEY,
	roadIds: [],
	owners: [],
}

export default initModel
