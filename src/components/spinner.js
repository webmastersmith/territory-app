import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
const { div } = hh(h)

export default function spinner(color) {
    return div({className: `lds-spinner lds-spinner-${color}`},[
        div(),
        div(),
        div(),
        div(),
        div(),
        div(),
        div(),
        div(),
        div(),
        div(),
        div(),
        div(),
    ])

}