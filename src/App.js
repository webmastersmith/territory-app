import { diff, patch } from "virtual-dom"
import createElement from "virtual-dom/create-element"

// impure code below
function app(initModel, update, view, node) {
	
	let model = initModel
	
	let currentView = view(dispatch, model)
	let rootNode = createElement(currentView)
	node.appendChild(rootNode)

	function dispatch(msg) {
		// what i added.
		const updates = update(msg, model);
		const isArray = Array.isArray(updates);
		model = isArray ? updates[0] : updates;
		const command = isArray ? updates[1] : null;
		httpEffects(dispatch, command);

		// model = update(msg, model)
		const updatedView = view(dispatch, model)
		const patches = diff(currentView, updatedView)
		rootNode = patch(rootNode, patches)
		currentView = updatedView
	}
}

function httpEffects(dispatch, command) {
	if (command === null) { return; }
	
	const { request, successMsg, errorMsg } = command;
	
	try {
		const url = request.url
		fetch(url, request)
			.then(response => response.json())
			.then(result => dispatch(successMsg(result)))
			.catch(err => {
				if (err.response) {
					dispatch(errorMsg(err.response.data))
				} else {
					dispatch(errorMsg(JSON.stringify(err)))
				}
			})
	} catch(e) {
		console.log('Fetch request error:', e);
	}
		
}

export default app
