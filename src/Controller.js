const MSG = {
	CARD: "CARD",
}

export function newCard(cardData) {
	return {
		type: MSG.CARD,
		cardData,
	}
}

function update(msg, model) {
	switch (msg.type) {
		case MSG.CARD: {
			const {
				cardData: { id, question, answer, score },
			} = msg
			return { ...model }
		}
	}
	return model
}

export default update
