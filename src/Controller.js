import curry from 'ramda/src/curry'

const MSG = {
	ROAD: "ROAD",
	KEY: "KEY",
	ROAD_LIST: "ROAD_LIST",
	ROAD_ITEM: "ROAD_ITEM",
	HTTP_SUCCESS_LIST: "HTTP_SUCCESS_LIST",
	HTTP_SUCCESS_ITEM: "HTTP_SUCCESS_ITEM",
	HTTP_ERROR: "HTTP_ERROR",
	CLEAR_ERROR: "CLEAR_ERROR",
	DELETE_LOT: "DELETE_LOT"
}

function roadListUrl(key) {
	return `http://localhost:5500/${key}`
}
function roadItemUrl(key) {
	return `http://localhost:5500/lots/${key}`
}
// submit button on road name.
export const getRoadList = { type: MSG.ROAD_LIST }
export const getRoadItem = { type: MSG.ROAD_ITEM }

export function inputRoadName(road) {return {type: MSG.ROAD, road,}}
export function updateKey(key) {return {type: MSG.KEY, key,}}
export function deleteLot(id) {return {type: MSG.DELETE_LOT, id,}}
const httpSuccessListMsg = curry((roadName, response) => ({
	type: MSG.HTTP_SUCCESS_LIST,
	roadName,
	response
}))
const httpSuccessItemMsg = (response) => ({
	type: MSG.HTTP_SUCCESS_ITEM,
	response
})
const httpErrorMsg = (error) => ({ type: MSG.HTTP_ERROR, error})
export const clearError = { type: MSG.CLEAR_ERROR }

function update(msg, model) {
	switch (msg.type) {
		case MSG.ROAD: {
			const { road } = msg
			return { ...model, road: road.toUpperCase() }
		}
		case MSG.KEY: {
			const { key } = msg
			return { ...model, key }
		}
		case MSG.ROAD_LIST: {
			return [
				{...model, waiting: true},
				{
					request: { 
						url: roadListUrl(model.key),
						params: { road: model.road },
						method: 'get'
					},
					successMsg: httpSuccessListMsg(model.road),
					errorMsg: httpErrorMsg
				}
			]
		}
		case MSG.ROAD_ITEM: {
			// model.roadIds
			return [
				{...model, waiting: true},
				{
					request: { 
						url: roadItemUrl(model.key),
						params: { roadIds: model.roadIds[0] },
						method: 'get'
					},
					successMsg: httpSuccessItemMsg,
					errorMsg: httpErrorMsg
				}
			]
		}
		case MSG.HTTP_SUCCESS_LIST: {
			const { response } = msg
			return { ...model, waiting: false, roadIds: response.data }
		}
		case MSG.HTTP_SUCCESS_ITEM: {
			const { response } = msg
			const [removed, ...roadIds] = model.roadIds
			const ownersArr = response.data // array of owners
			const owners = [ ...model.owners, ...ownersArr ]
			return { ...model, waiting: false, owners, roadIds }
		}
		case MSG.HTTP_ERROR: {
			const { error } = msg
			return {...model, waiting: false, error}
		}
		case MSG.CLEAR_ERROR: {
			console.log('clear error msg')
			return {...model, error: null}
		}
		case MSG.DELETE_LOT: {
			const id = msg.id
			const owners = model.owners.filter( owner => id !== owner.landId)
			return {...model, owners}
		}
	}
	return model
}

export default update
