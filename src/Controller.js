const MSG = {
	ROAD: "ROAD",
}

export function getRoad(road) {return {type: MSG.ROAD,	road,}}

function update(msg, model) {
	switch (msg.type) {
		case MSG.ROAD: {
			const { road } = msg
			console.log(road)
			return { ...model }
		}
	}
	return model
}

export default update
