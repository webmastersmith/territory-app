import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import './styles/index.css'
import Card from './components/Card'
import InputBox from './components/InputBox'
import {updateKey} from './Controller'
import spinner from './components/spinner'
import xSVG from "./images/x.svg"
import { clearError } from './Controller'


const { div, p, h1, input, button, img } = hh(h)

function error(dispatch, model) { if (!model.error) {  return null;  }
	  return div({ className: 'p-2 mx-2 mb-10 bg-red-500' }, [
	    p({className: `text-white text-xl relative`}, [
			model.error,
			button({className: `p-2 bg-white rounded-full absolute -top-5 -right-5`,
				onclick: () => dispatch(clearError),
			}, [
				img({className: `w-4 h-4`, src: xSVG},)
			])
		]) 
 	  ]);
}
function getCards(dispatch, model, cards) {
	return cards.map(card => Card(dispatch, model, card))
}


// total page view
function view(dispatch, model) {
	return div({ className: `h-100% pt-10` }, [
		// modal
		div({className: `bg-gray-300 justify-center items-center w-screen min-h-screen z-10 absolute left-0 top-0 rounded-xl opacity-60 ${model.waiting ? 'flex' : 'hidden'}`}, [
			spinner('blue'),
		]),

		// Angelina County Territory
		div({className: `flex border-b-2 border-black`}, [
			h1({ className: `text-3xl font-bold` },
				'Angelina County Territory Finder'),
				// key input box
			input({
				className: `w-52 border-2 border-green-500 mb-1 ml-auto rounded-md px-2 border-collapse `,
				type: 'text',
				value: model.key,
				oninput: (e) => dispatch(updateKey(e.target.value))
			},)
		]),
		InputBox(dispatch, model),
		error(dispatch, model),
		div({className: `grid grid-cols-2 gap-6 justify-items-center`}, [
			getCards(dispatch, model, model.owners),
		]),
		// pre(JSON.stringify(model, null, 2))
	])
}

export default view
