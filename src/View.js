import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import './styles/index.css'
// import { showFormMsg } from "./Controller"

const { pre, div, h1, p } = hh(h)







// total page view
function view(dispatch, model) {
	return div({ className: `bg-blue-200 h-100%` }, [
		h1({ className: `` }, 'hello world!'),
		p({ className: `bg-red-100` }, 'hello vite'),
		pre(JSON.stringify(model, null, 2))
	])
}

export default view
