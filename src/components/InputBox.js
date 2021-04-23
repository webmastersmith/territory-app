import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
const { pre, div, h1, p } = hh(h)

export default function InputBox(d, m) {
	return div({ className: `my-10` }, [
		p({ className: `bg-yellow-200` }, 'Hello Input')
	])
}