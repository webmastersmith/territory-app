import * as R from 'ramda'

const MSG = {
	ROAD: "ROAD",
	ROAD_URL: "ROAD_URL",
	KEY: "KEY",
	HTTP_SUCCESS: "HTTP_SUCCESS",
	HTTP_ERROR: "HTTP_ERROR",
	CLEAR_ERROR: "CLEAR_ERROR"
}

function returnUrl(key) {
	return `http://localhost:5500/${key}`
}
export function inputRoadName(road) {return {type: MSG.ROAD, road,}}
// submit button on road name.
export const getRoadUrl = { type: MSG.ROAD_URL }
export function fetchPropId(roadName) {return {type: MSG.ROAD_ID, roadName,}}
export function updateKey(key) {return {type: MSG.KEY, key,}}
const httpSuccessMsg = R.curry((roadName, response) => ({
	type: MSG.HTTP_SUCCESS,
	roadName,
	response
}))
const httpErrorMsg = (error) => ({ type: MSG.HTTP_ERROR, error})
const clearError = { type: MSG.CLEAR_ERROR }

function update(msg, model) {
	switch (msg.type) {
		case MSG.ROAD: {
			const { road } = msg
			return { ...model, road }
		}
		case MSG.KEY: {
			const { key } = msg
			// console.log(road)
			return { ...model, key }
		}
		case MSG.ROAD_URL: {
			// 1. build initial display
			// 2. return roadName, 
			return [
				{...model, waiting: true},
				{
					request: { 
						url: returnUrl(model.key),
						data: { road: model.road },
						method: 'post'
					},
					successMsg: httpSuccessMsg(model.road),
					errorMsg: httpErrorMsg(model.error)
				}
			]
		}
		case MSG.HTTP_SUCCESS: {
			const { roadName, response } = msg
			return {...model, waiting: false, roadIds: response.data}
		}
		case MSG.HTTP_ERROR: {
			const { error } = msg
			console.log('error msg', error)
			return {...model, waiting: false, error}
		}
		case MSG.CLEAR_ERROR: {
			console.log('clear error msg')
			return {...model, error: null}
		}
	}
	return model
}

export default update
