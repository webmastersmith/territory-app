import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
const { pre, div, h1, p } = hh(h)
import './styles/index.css'
import Card from './components/Card'
import InputBox from './components/InputBox'
<<<<<<< HEAD
=======

// import { showFormMsg } from "./Controller"

>>>>>>> 001bf91380be941fbfc39db5b864027733a528d4

// import { showFormMsg } from "./Controller"



// total page view
function view(dispatch, model) {
	const d = dispatch
	const m = model
	return div({ className: `h-100% pt-10` }, [
		h1({ className: `text-3xl font-bold border-b-2 border-black` },
<<<<<<< HEAD
			'Angelina County Territory Address Finder'),
=======
			'Angelina County Territory Finder'),
>>>>>>> 001bf91380be941fbfc39db5b864027733a528d4
		InputBox(d,m),
		Card(d, m),
		pre(JSON.stringify(model, null, 2))
	])
}

export default view
