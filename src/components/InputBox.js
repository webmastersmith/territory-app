import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import { inputRoadName, getRoadList, getRoadItem } from '../Controller'
import { btnCSS, btnDisabled } from './Button'

const { div, label, input, form, button, p, span} = hh(h)

function showLots(m) {
	return span({className: `text-red-500`}, `${m.road} ${m.roadIds.length} LOTS`)
}

export default function InputBox(d, m) {
	return div({ className: `my-10` }, [
		form({className: ``,
			onsubmit: e => {
				e.preventDefault()
				m.roadIds.length ? d(getRoadItem) : d(getRoadList)  
			}
	}, [
			label({className: `text-gray-600 pl-2`}, 'Road Name'),
			div({className: `relative`}, [
				input({
					className: `
					border-black border block rounded-lg w-100 p-2 text-2xl
					${m.roadIds.length && 'text-green-500'}
					`,
					type: 'text',
					value: m.roadIds.length 
							? `${m.road}: \t ${m.roadIds.length} Lots `
							: m.road,
					oninput: (e) => d(inputRoadName(e.target.value))
				}),
				m.roadIds.length 
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