// import propertySearch from './components/propertyList'

const MSG = {
	ROAD: "ROAD",
	ROAD_ID: "ROAD_ID",
	KEY: "KEY",
}

export function getRoad(road) {return {type: MSG.ROAD,	road,}}
export function fetchPropId(roadName) {return {type: MSG.ROAD_ID,	roadName,}}
export function updateKey(key) {return {type: MSG.KEY,	key,}}

function update(msg, model) {
	switch (msg.type) {
		case MSG.ROAD: {
			const { road } = msg
			// console.log(road)
			return { ...model, road }
		}
		case MSG.KEY: {
			const { key } = msg
			// console.log(road)
			return { ...model, key }
		}
		case MSG.ROAD_ID: {
			const { roadName } = msg
			fetch('http://localhost:5500', {
				method: 'POST',
				
			})
			// console.log(roadName)
			return { ...model }
		}
	}
	return model
}

export default update
