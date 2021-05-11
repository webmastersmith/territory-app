import hh from "hyperscript-helpers"
import { h } from "virtual-dom"


const { div, img, a, span } = hh(h)


export default function(dispatch, model, textInput) {
    console.log('data:text/plain;charset=utf-8, ' + textInput);
    return a({className: ``, 
        href: URL.createObjectURL(new Blob([textInput], {type: 'text/plain'})),
        target: '_blank',
        download: `Territory_${model.territory}.txt`,
    })
    // if (model.owners.length > 0) {
    // }
}