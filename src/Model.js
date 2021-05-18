const initModel = {
	road: import.meta.env.VITE_ROAD,
	waiting: false,
	territory: '',
	territoryServant: false,
	showOwnerPropertyIcon: false,
	showOwnerProperty: true,
	error: null,
	bulkUpload: false,
	key: import.meta.env.VITE_KEY,
	roadIds: [],
	owners: [],
}

export default initModel
