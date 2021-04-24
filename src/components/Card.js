import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
const { pre, div, h1, p } = hh(h)


export default function card(d, m) {
	return div({ className: `my-10` }, [
		p({ className: `bg-red-500` }, 'Hello Card body')
	])
}