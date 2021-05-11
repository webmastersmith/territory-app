import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import './styles/index.css'
import Card from './components/Card'
import InputBox from './components/InputBox'
import {} from './Controller'
import spinner from './components/spinner'
import xSVG from "./images/x.svg"
import { updateKey, clearError } from './Controller'
import Buttons from './components/Buttons'


const { pre, div, p, h1, input, button, img, a, span } = hh(h)

// error function display
function error(dispatch, model) { 
	if (!model.error) {  return null;  }
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

// get property cards
function getCards(dispatch, model) {
	return model.owners.map(owner => Card(dispatch, owner))
}

// correct the size on the number of property's icon.
function getNumSize(num) {
	if (num > 99 ) {
		return `w-10 h-10 -top-3 -right-10`
	} else if (num > 9) {
		return `w-8 h-8 -top-2 -right-8`
	} else {
		return `w-7 h-7 -top-1 -right-6`
	}

}

// total page view
function view(dispatch, model) {
	return div({ className: `h-100% sm:container mx-auto` }, [
		// modal
		div({className: `bg-gray-300 justify-center items-center w-screen min-h-screen z-10 absolute left-0 top-0 rounded-xl opacity-60 ${model.waiting ? 'flex' : 'hidden'}`}, [
			spinner('blue'),
		]),

		// top row of buttons
		Buttons(dispatch, model),

		// Angelina County Territory
		div({className: `sm:flex border-b-2 border-black`}, [
			h1({ className: `text-center sm: text-left text-normal sm:text-2xl md:text-3xl font-bold` },
				'Territory Address Finder'),
				// key input box
			input({
				className: `w-100 mt-2 sm:mt-auto sm:w-48 md:w-52 border-2 border-green-500 mb-1 ml-auto rounded-md px-2 border-collapse `,
				type: 'text',
				value: model.key,
				oninput: (e) => dispatch(updateKey(e.target.value))
			},)
		]),
		InputBox(dispatch, model),
		// Territory ID Message
		div({className: `font-bold ${model.bulkUpload ? 'my-4 flex justify-center' : 'hidden'}`}, [
			p({className: `text-3xl text-blue-700`}, [
				`Territory `,
				span({className: `relative`},[
					`${model.territory}`,
					span({className: `bg-red-500 flex justify-center items-center rounded-full text-white text-sm absolute ${getNumSize(model.owners.length)}`}, `${model.owners.length}`),
				]),
			]),
		]),
		error(dispatch, model),
		// cards -check if empty
		div({className: `grid grid-cols-auto-310 gap-6 justify-items-center`}, [
				getCards(dispatch, model),
			]),
			pre(JSON.stringify(model, null, 2))
	])
}

export default view
