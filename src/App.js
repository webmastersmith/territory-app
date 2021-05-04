import { diff, patch } from "virtual-dom"
import createElement from "virtual-dom/create-element"
import axios from 'axios';
import type from 'ramda/src/type'


// impure code below
function app(initModel, update, view, node) {
	let model = initModel
	let currentView = view(dispatch, model)
	let rootNode = createElement(currentView)
	node.appendChild(rootNode)

	function dispatch(msg) {
		// what i added.
		const updates = update(msg, model);
		const isArray = type(updates) === 'Array';
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
	
	
	axios.get(`${import.meta.env.VITE_HTTP}`, {timeout: 500})
		.catch(e => {
			// do nothing
		}) 
			
	axios(request)
		.then(response => dispatch(successMsg(response)))
		.catch(err => {
			if (err.response) {
				// console.log(`axios response error: ${err.response.data} ${err.response.status} ${JSON.stringify(err.response.headers)}`);
				dispatch(errorMsg(err.response.data))
			} else {
				dispatch(errorMsg(JSON.stringify(err)))
			}
		})
		
}

export default app
