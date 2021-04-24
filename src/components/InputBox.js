import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import { getRoad, fetchPropId } from '../Controller'
import { btnCSS, btnDisabled } from './Button'

const { div, label, input, form, button} = hh(h)

export default function InputBox(d, m) {
	return div({ className: `my-10` }, [
		form({className: ``,
			onsubmit: e => {
				e.preventDefault()
				d(fetchPropId(m.road))
			}
	}, [
			label({className: `text-gray-600 pl-2`}, 'Road Name'),
			input({
				className: `border-black border block rounded-lg w-100 p-2`,
				type: 'text',
				value: m.road,
				oninput: (e) => d(getRoad(e.target.value))
			}),
			button({
				className: `${btnCSS('bg-blue-500', 'bg-blue-600', 'text-white')}`,
				type:'submit'
			}, 'find')			
		])
	])
}