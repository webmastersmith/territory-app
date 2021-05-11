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
	DELETE_LOT: "DELETE_LOT",
	SAVE: "SAVE",
	UPLOAD: "UPLOAD",
	BULK_UPLOAD: "BULK_UPLOAD",
	LOCAL_STORAGE: "LOCAL_STORAGE",
	PRINT: "PRINT",
	TRASH: "TRASH",
}

function roadListUrl(key) {
	return `${import.meta.env.VITE_HTTP}/${key}`
}
function roadItemUrl(key) {
	return `${import.meta.env.VITE_HTTP}/lots/${key}`
}
function dataURI(data) {
	return "data:text/json;charset=utf-8," + encodeURIComponent(data)
}
// submit button on road name.
export const getRoadList = { type: MSG.ROAD_LIST }
export const getRoadItem = { type: MSG.ROAD_ITEM }
export const clearError = { type: MSG.CLEAR_ERROR }
export const getLocalStorage = { type: MSG.LOCAL_STORAGE }
export const clearStorage = { type: MSG.TRASH }
export const printPage = { type: MSG.PRINT }

export function inputRoadName(road) {return {type: MSG.ROAD, road,}}
export function updateKey(key) {return {type: MSG.KEY, key,}}
export function deleteLot(id) {return {type: MSG.DELETE_LOT, id,}}
export function uploadStorage(data, error=null) {return {type: MSG.UPLOAD, data, error}}
export function bulkUpload(data, name='',error=null) {return {type: MSG.BULK_UPLOAD, data, name, error}}
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
			const newModel = { ...model, waiting: false, roadIds: response.data} 			
			localStorage.clear()
			localStorage.setItem('model', JSON.stringify(newModel))
			return newModel
		}
		case MSG.HTTP_SUCCESS_ITEM: {
			const { response } = msg
			const [removedId, ...roadIds] = model.roadIds // remove 1st block and return.
			const ownersArr = response.data // array of owners
			const owners = [ ...model.owners, ...ownersArr ]
			const newModel = { ...model, waiting: false, owners, roadIds }
			localStorage.clear()
			localStorage.setItem('model', JSON.stringify(newModel))
			return newModel
		}
		case MSG.HTTP_ERROR: {
			const { error } = msg
			return {...model, waiting: false, error}
		}
		case MSG.CLEAR_ERROR: {
			return {...model, error: null}
		}
		case MSG.DELETE_LOT: {
			const id = msg.id
			const owners = model.owners.filter( owner => id !== owner.landId)
			const newModel = {...model, owners }
			localStorage.clear()
			localStorage.setItem('model', JSON.stringify(newModel))			
			return newModel
		}
		case MSG.TRASH: {
			const newModel = {
				road: '',
				waiting: false,
				territory: '',
				print: false,
				error: null,
				bulkUpload: false,
				bulkIdArray: [],
				key: '',
				roadIds: [],
				owners: []
			}
			localStorage.clear()
			return newModel
		}
		case MSG.UPLOAD: {
			const { data } = msg
			localStorage.clear()
			localStorage.setItem('model', data)
			return { ...JSON.parse(data)}
		}
		case MSG.BULK_UPLOAD: {
			const { data, name } = msg
			localStorage.clear()
			const bulkIdArray = data
				.replace(/\n|\r\n|\r/gi, '')
				.split(',') // remove newlines, convert to array.
				.filter(id => id !== '')

			// clear any old ids from model
			if (Array.isArray(bulkIdArray)) {
				const newModel = {
					...model,
					road: '',
					waiting: true,
					territory: name,
					print: false,
					error: null,
					bulkUpload: true,
					bulkIdArray,
					roadIds: [],
					owners: []
				}
				return [
					newModel,
					{
						request: { 
							url: roadItemUrl(newModel.key),
							params: { roadIds: newModel.bulkIdArray },
							method: 'get'
						},
						successMsg: httpSuccessItemMsg,
						errorMsg: httpErrorMsg
					}
				]
			} else {
				return {...model, error: 'There was a problem with data. Please upload again.'}
			}
		}
		case MSG.LOCAL_STORAGE: {
			if (!!localStorage.getItem('model')) {
				return { ...JSON.parse(localStorage.getItem('model')) }
			}
		}
		case MSG.PRINT: {
			localStorage.clear()
			const newModel = {...model, print: true}
			localStorage.setItem('model', newModel)
			return newModel
		}


	}
	return model
}

export default update
