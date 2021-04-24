const MSG = {
	ROAD: "ROAD",
	ROAD_ID: "ROAD_ID",
}

export function getRoad(road) {return {type: MSG.ROAD,	road,}}
export function fetchPropId(roadName) {return {type: MSG.ROAD_ID,	roadName,}}

function update(msg, model) {
	switch (msg.type) {
		case MSG.ROAD: {
			const { road } = msg
			console.log(road)
			return { ...model, road }
		}
		case MSG.ROAD_ID: {
			const { roadName } = msg
			console.log(roadName)
			return { ...model }
		}
	}
	return model
}

export default update
