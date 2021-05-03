import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import flatten from 'ramda/src/flatten'
import { inputRoadName, getRoadList, getRoadItem } from '../Controller'
import { btnCSS, btnDisabled } from './Button'

const { div, label, input, form, button, p, span} = hh(h)

export default function InputBox(d, m) {
	const roadLength = flatten(m.roadIds).length
	return div({ className: `my-10` }, [
		form({className: ``,
			onsubmit: e => {
				e.preventDefault()
				roadLength ? d(getRoadItem) : d(getRoadList)  
			}
	}, [
			label({className: `text-gray-600 pl-2`}, 'Road Name'),
			div({className: `relative`}, [
				input({
					className: `
					border-black border block rounded-lg w-100 p-2 text-2xl
					${roadLength ? 'text-blue-500' : ''}
					`,
					type: 'text',
					value: roadLength 
							? `${m.road}: \t ${roadLength} Properties `
							: m.road,
					oninput: (e) => d(inputRoadName(e.target.value))
				}),
				// change button function if have property ids.
				roadLength 
					? button({
					className: `${btnCSS('bg-green-500', 'bg-green-600', 'text-white', 'text-2xl')} absolute top-0 right-0 h-100`,
					type:'submit'
				}, 'find owners')
					: button({
					className: `${btnCSS('bg-blue-500', 'bg-blue-600', 'text-white', 'text-2xl')} absolute top-0 right-0 h-100`,
					type:'submit'
				}, 'find lots')
			]), // end input box div
		]) // end form
	]) // end div
}