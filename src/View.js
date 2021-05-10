import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import './styles/index.css'
import Card from './components/Card'
import InputBox from './components/InputBox'
import {updateKey} from './Controller'
import spinner from './components/spinner'
import xSVG from "./images/x.svg"
import trashSVG from "./images/trash.svg"
import saveSVG from "./images/save.svg"
import uploadSVG from "./images/upload.svg"
import bulkUploadSVG from "./images/bulk-upload.svg"
import { clearError, clearStorage, uploadStorage, bulkUpload } from './Controller'


const { pre, div, p, h1, input, button, img, a, span } = hh(h)

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
function getCards(dispatch, model) {
	return model.owners.map(owner => Card(dispatch, owner))
}

// total page view
function view(dispatch, model) {
	return div({ className: `h-100%` }, [
		// modal
		div({className: `bg-gray-300 justify-center items-center w-screen min-h-screen z-10 absolute left-0 top-0 rounded-xl opacity-60 ${model.waiting ? 'flex' : 'hidden'}`}, [
			spinner('blue'),
		]),

		div({className: `flex my-2 `}, [
			// save button
			div({className: `has-tooltip relative`}, [
				span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 -bottom-12`}, `Save`),
				a({className: ``, 
					href: URL.createObjectURL(new Blob([localStorage.getItem('model')], {type: 'text/json'})),
					target: '_blank',
					download: model.road + '.json',
				},
					img({className: `w-10 h-10 mr-8 cursor-pointer`, src: saveSVG,},),
				),
			]),

			// upload button
			div({className: `has-tooltip relative`}, [
				span({className: `tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -right-7`}, `Upload File`),
				input({className: `hidden`, id:'fileElem', type:'file', accept:'.json',
					name:'myFile',
					onchange: e => {
						if (e.srcElement.files[0]) {
							e.srcElement.files[0].text().then(data => dispatch(uploadStorage(data)))
						}
					}
				}),
				img({className: `w-10 h-10 cursor-pointer`,
					src: uploadSVG,
					onclick: e => {
						document.getElementById('fileElem').click()
					}
				},),
			]),
			
			// bulk upload
			div({className: `ml-8 has-tooltip relative`}, [
				span({className: `tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 left-0`}, `Bulk Upload From Territory Servant`),

				input({className: `hidden`, id:'bulkUploadElem', type:'file', name:'bulkArray',
					onchange: e => {
						if (e.srcElement.files[0]) {
							e.srcElement.files[0].text().then(data => dispatch(bulkUpload(data)))
						}
					}
				}),
				img({className: `w-10 h-10 cursor-pointer`,
					src: bulkUploadSVG,
					onclick: e => {
						document.getElementById('bulkUploadElem').click()
					}
				},),
			]),

			// trash button
			div({className: `has-tooltip relative ml-auto`}, [
				span({className: `tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -right-7`}, `Start Over`),
				img({className: `w-10 h-10 cursor-pointer`, 
					src: trashSVG,
					onclick: () => dispatch(clearStorage),
				},)
			]),
		]),
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
		error(dispatch, model),
		// cards -check if empty
		div({className: `grid grid-cols-auto-430 gap-6 justify-items-center`}, [
				getCards(dispatch, model),
			]),
		pre(JSON.stringify(model, null, 2))
	])
}

export default view
