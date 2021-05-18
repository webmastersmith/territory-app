import curry from 'ramda/src/curry'
import initModel from './Model'

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
	OWNER_PROPERTY_ARRAY: "OWNER_PROPERTY_ARRAY",
	HTTP_SUCCESS_OWNERS: "HTTP_SUCCESS_OWNERS",
	SHOW_OWNER_PROPERTY: "SHOW_OWNER_PROPERTY",
	LOCAL_STORAGE: "LOCAL_STORAGE",
	TRASH: "TRASH",
}

function roadListUrl(key) {
	return `${import.meta.env.VITE_HTTP}/${key}`
}
function roadItemUrl(key) {
	return `${import.meta.env.VITE_HTTP}/lots/${key}`
}
function ownerPropertyUrl(key) {
	return `${import.meta.env.VITE_HTTP}/owners/${key}`
}
// submit button on road name.
export const getRoadList = { type: MSG.ROAD_LIST }
export const getRoadItem = { type: MSG.ROAD_ITEM }
// make changes to model and wait for response form server.
export const getOwnerProperty = { type: MSG.OWNER_PROPERTY_ARRAY }
export const clearError = { type: MSG.CLEAR_ERROR }
export const getLocalStorage = { type: MSG.LOCAL_STORAGE }
export const clearStorage = { type: MSG.TRASH }

export function showOwnerProperty(ownerId) { return {type: MSG.SHOW_OWNER_PROPERTY, ownerId} }
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
// response make changes to data.
const httpSuccessOwnersMsg = (response) => ({
	type: MSG.HTTP_SUCCESS_OWNERS,
	response
})
const httpErrorMsg = (error) => ({ type: MSG.HTTP_ERROR, error})


// update function start
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
			localStorage.clear()
			return initModel
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


			// transform file into array of id's.
			const bulkIdArray = data
				.replace(/\n|\r\n|\r/gi, '') // remove newlines
				.split(',') // convert to array.
				.filter(id => id !== '') // remove blank items

			var newBulkIdArray = []
				try {
					newBulkIdArray = bulkIdArray.map(id => JSON.parse(id) ? JSON.parse(id) : id) // check if JSON values.
				} catch(e) {
					newBulkIdArray = bulkIdArray
				}

				// console.log('bulkIdArray', bulkIdArray);
				
			if (Array.isArray(newBulkIdArray)) {			
				// clear any existing data from model.
				const newModel = {
					...initModel,
					key: model.key,
					waiting: true,
					territory: name.replace(/\.\w+$/i, ''),
					bulkUpload: true,
					// bulkIdArray,
				}
				return [
					newModel,
					{
						request: { 
							url: roadItemUrl(newModel.key),
							data: { landIds: newBulkIdArray }, //already JSON.stringify
							method: 'post'
						},
						successMsg: httpSuccessItemMsg,
						errorMsg: httpErrorMsg
					}
				]
			} else {
				return {...model, error: 'There was a problem with file. Please upload again.'}
			}
		}
		case MSG.OWNER_PROPERTY_ARRAY: {
			// The initial get owners properties request.
			// create object from all the owner id's and names.
			const ownersArr = model.owners.map(owner => {
				return {ownerId: owner.ownerId, name: owner.name}
			})
			// return only the unique, complete object.
			function uniqObjArr(a, prop) {
				const arr1 = a.map((obj) => obj[prop])
				return a.filter((v, i) => arr1.indexOf(v[prop]) === i)
			}
			// get all unique owners by id.
			const uniqOwnersArr = uniqObjArr(ownersArr, 'ownerId')

			// reset model
			const newModel = {...model, waiting: true }
			
			// send initial get request
			return [
				newModel,
				{
					request: { 
						url: ownerPropertyUrl(model.key),
						data: { owners: JSON.stringify(uniqOwnersArr) },
						method: 'post'
					},
					successMsg: httpSuccessOwnersMsg,
					errorMsg: httpErrorMsg
				}
			]
		}
		case MSG.HTTP_SUCCESS_OWNERS: {
			// When owner_property_array has returned, add data to each individual owner.
			const { response: {data} } = msg

			// add returned data object to owner object.
			// loop through owners, add there owned properties to owner object.
			const ownersArr = model.owners.map(owner => {
				// match ownerId with obj id.
				if (data[owner.ownerId] ) {
					return {...owner, ownerProperty: data[owner.ownerId]}
				}
				return owner
			})

			// create new model
			const newModel = {
				...model,
				waiting: false,
				showOwnerPropertyIcon: true,
				owners: ownersArr
			}

			localStorage.clear()
			localStorage.setItem('model', JSON.stringify(newModel))
			return newModel
		}
		case MSG.SHOW_OWNER_PROPERTY: {
			// show/hide owner properties button clicked.
			const { ownerId } = msg
			// extract owner from owners
			const owners = model.owners.filter(owner => owner.ownerId !== ownerId)
			const [owner] = model.owners.filter(owner => owner.ownerId === ownerId)
			// find index of owner id
			const i = model.owners.findIndex(owner => owner.ownerId === ownerId)
			
			const toggle = owner.showOwnerProperty ? false : true
			const newOwner = {...owner, showOwnerProperty: toggle}
			// insert back into array.
			const junk = owners.splice(i, 0, newOwner) // destructive
			const newModel = {
				...model,
				owners,
			}
			localStorage.clear()
			localStorage.setItem('model', JSON.stringify(newModel))
			return newModel
		}
		case MSG.LOCAL_STORAGE: {
			if (!!localStorage.getItem('model')) {
				return { ...JSON.parse(localStorage.getItem('model')) }
			}
		}
	}
	return model
}

export default update
