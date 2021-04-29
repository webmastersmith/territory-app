import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import './styles/index.css'
import Card from './components/Card'
import InputBox from './components/InputBox'
import {updateKey} from './Controller'

const { pre, div, p, h1, span, input } = hh(h)

function error(dispatch, model) { if (!model.error) {  return null;  }
	  return div({ className: 'p-2 mx-2 bg-red-500' }, [
	    p({className: `text-white text-xl`}, model.error) 
 	  ]);
}


// total page view
function view(dispatch, model) {
	return div({ className: `h-100% pt-10` }, [
		div({className: `flex border-b-2 border-black`}, [
			h1({ className: `text-3xl font-bold` },
				'Angelina County Territory Finder'),
			input({
				className: `w-52 border-2 border-green-500 mb-1 ml-auto rounded-md px-2 border-collapse `,
				type: 'text',
				value: model.key,
				oninput: (e) => d(updateKey(e.target.value))
			},)
		]),
		InputBox(dispatch, model),
		error(dispatch, model),
		Card(dispatch, model,  model.owner),
		pre(JSON.stringify(model, null, 2))
	])
}

export default view
