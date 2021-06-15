import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import './styles/index.css'
import Card from './components/Card'
import spinner from './components/spinner'
import xSVG from "./images/x.svg"
import { clearError, sortA_Z } from './Controller'
import Buttons from './components/Buttons'


const { div, p, h1, button, img, span, a, label, input } = hh(h)

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
	return model.owners.map(owner => Card(dispatch, model, owner))
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
	return div({ className: `h-100% px-1 sm:px-3 md:px-5 lg:container mx-auto` }, [
		// modal
		div({className: `bg-gray-300 justify-center items-center w-screen min-h-screen z-10 absolute left-0 top-0 rounded-xl opacity-60 ${model.waiting ? 'flex' : 'hidden'}`}, [
			spinner('blue'),
		]),

		// top row of buttons
		Buttons(dispatch, model),

		// Territory Address Finder
		div({className: `mx-2 mb-2 mt-6 sm:mx-0 flex border-b-2 border-black`}, [
			h1({ className: `text-xl sm:text-2xl md:text-3xl font-bold` }, [
				model.bulkUpload
					? p({className: `text-textColor`}, [
						`Lufkin Territory `,
							span({className: `relative`},[
								`${model.territory}`,
								span({className: `bg-accent flex justify-center items-center rounded-full text-accentText text-sm absolute ${getNumSize(model.owners.length)}`}, `${model.owners.length}`),
							])
					]) // end p
					: `Lufkin Address Viewer`
			]), // end h1
			
			// sort button
			div({className: `${model.owners.length > 0 ? 'block' : 'hidden'} ml-auto`}, [
				label({className: `flex items-center cursor-pointer`, for:"sortAtoZ" }, [
					// toggle
					div({className: `relative`}, [
						// checkbox
						input({
							className: `sr-only`,
							type:"checkbox",
							id:"sortAtoZ",
							checked: !model?.sortAtoZ || false,
							onclick: () => dispatch(sortA_Z)
						},),
						// background container
						div({className: `block bg-gray-600 w-14 h-8 rounded-full`},),
						// dot
						div({className: `dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition`},),
					]), // end toggle
					// label
					div({className: `hidden sm:inline ml-3 text-gray-700 font-medium`}, [
						'Sort by number'
					]),					
				]) // end label
			]), // end sort div
  
		]), // end border Territory Address Finder


		// // Territory ID Message
		// div({className: `font-bold ${model.bulkUpload ? 'my-4 flex justify-center' : 'hidden'}`}, [
		// 	p({className: `text-3xl text-blue-700`}, [
		// 		`Territory `,
		// 		span({className: `relative`},[
		// 			`${model.territory}`,
		// 			span({className: `bg-green-500 flex justify-center items-center rounded-full text-white text-sm absolute ${getNumSize(model.owners.length)}`}, `${model.owners.length}`),
		// 		]),
		// 	]),
		// ]), // end territory header

		error(dispatch, model),
		
		// Missing Property
		div({className: `${model.showMissingProperty ? 'block' : 'hidden'} mb-10`}, [
			model.missingProperty.map(landId => a({className: ``,
				href: `https://propaccess.trueautomation.com/mapSearch/?cid=71&p=${landId}`,
				target: '_blank',
			}, [
				p({className: ` flex-grow flex-shrink text-xs sm:text-sm top-0.5 sm:top-0.5 relative  text-blue-500 focus:ring-2 focus:ring-blue-600 visited:text-purple-500 active:text-red-500 underline cursor-pointer `}, landId),
			]),) // end map
		]),

		// cards -check if empty
		div({className: `grid grid-cols-auto-310 sm:grid-cols-auto-415 gap-6 justify-items-center`}, [
				getCards(dispatch, model),
			]),
			// pre(JSON.stringify(model, null, 2))
	])
}

export default view
