const initModel = {
	road: import.meta.env.VITE_ROAD,
	waiting: false,
	error: null,
	// error: "Property List is empty. No lots were found for road: BOX CAR RD. Please make sure road name is spelled correctly and road is in Angelina County.",
	cards: [],
	key: import.meta.env.VITE_KEY,
	roadIds: [],

	owners: import.meta.env.VITE_OWNERS,
}

export default initModel
