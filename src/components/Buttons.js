import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import trashSVG from "../images/trash.svg"
import saveSVG from "../images/save.svg"
import uploadSVG from "../images/upload.svg"
import bulkUploadSVG from "../images/bulk-upload.svg"
import bulkUploadPlusSVG from "../images/plus.svg"
import localStorageSVG from "../images/localStorage.svg"
import printerSVG from "../images/printer.svg"
import missingPropertySVG from "../images/missing.svg"

import { clearStorage, uploadStorage, bulkUpload, bulkUploadPlus, getLocalStorage, showMissingProperty } from '../Controller'
import Print from './Print'

const { div, input, img, a, span } = hh(h)



export default function (dispatch, model) {
    return div({className: `flex my-2 `}, [
        
        // left buttons group
        div({className: `flex justify-between w-100`}, [
            // save button
            div({className: `${model.bulkUpload?'block':'hidden'} has-tooltip relative`}, [
                span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 -bottom-12`}, `Save`),
                a({className: ``, 
                    href: URL.createObjectURL(new Blob([JSON.stringify(model)], {type: 'text/json'})),
                    target: '_blank',
                    download: `Territory_${model.territory}.json`,
                },
                    img({className: `w-10 h-10 cursor-pointer`, src: saveSVG,},),
                ),
            ]),
    
            // upload button
            div({className: `${model.owners.length > 0 ? 'hidden' : 'block'} has-tooltip relative`}, [
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
            div({className: `${model.key ? 'block': 'hidden'} has-tooltip relative`}, [
                span({className: `tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -left-4`}, `Bulk Upload For Territory Servant`),
                input({className: `hidden`, id:'bulkUploadElem', type:'file', accept:'.txt', name:'bulkArray',
                    onchange: e => {
                        if (e.srcElement.files[0]) {
                            e.srcElement.files[0].text().then(data => dispatch(bulkUpload(data, e.srcElement.files[0].name || '')))
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

            // bulk upload plus -add any missing territories
            div({className: `${model.key ? 'block': 'hidden'} has-tooltip relative`}, [
                span({className: `tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -left-4`}, `Bulk Upload Plus For Territory Servant`),
                input({className: `hidden`, id:'bulkUploadPlusElem', type:'file', accept:'.txt', name:'bulkArray',
                    onchange: e => {
                        if (e.srcElement.files[0]) {
                            e.srcElement.files[0].text().then(data => dispatch(bulkUploadPlus(data)))
                        }
                    }
                }),
                img({className: `w-10 h-10 cursor-pointer`,
                    src: bulkUploadPlusSVG,
                    onclick: e => {
                        document.getElementById('bulkUploadPlusElem').click()
                    }
                },),
            ]),  // end bulkUploadPlus

    
            // local storage upload
            div({className: `${localStorage.getItem('model') ? 'block': 'hidden'} has-tooltip relative`}, [
                span({className: `tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -left-4`}, `${localStorage.getItem('model') ? 'Local Storage' : 'Local Storage is Empty'}`),
                img({className: `w-10 h-10 cursor-pointer`, 
                    src: localStorageSVG,
                    onclick: () => dispatch(getLocalStorage),
                },)
            ]),
    
            // printer
            div({className: `${model.bulkUpload?'block':'hidden'} has-tooltip relative`}, [
                span({className: `tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 left-0`}, `Print`),
                a({className: ``, 
                    href: URL.createObjectURL(new Blob(Print(model.owners), {type: 'text/plain'})),
                    target: '_blank',
                    download: `Territory_${model.territory}.txt`,
                }, 
                    img({className: `w-10 h-10 cursor-pointer`, src: printerSVG})
                ),
            ]),			

            // show missing territory button
            div({className: `${model.missingProperty.length > 0 ? 'block': 'hidden'} has-tooltip relative`}, [
                span({className: `tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -right-7`}, `${model.showMissingProperty ? 'Hide': 'Show'} Missing Properties`),
                img({className: `w-10 h-10 cursor-pointer`, 
                    src: missingPropertySVG,
                    onclick: () => dispatch(showMissingProperty),
                },)
            ]), // end trash        
            
            
            
            // trash button
        div({className: `${localStorage.getItem('model') ? 'block': 'hidden'} has-tooltip relative`}, [
            span({className: `tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -right-7`}, `Start Over`),
            img({className: `w-10 h-10 cursor-pointer`, 
                src: trashSVG,
                onclick: () => dispatch(clearStorage),
            },)
        ]), // end trash
    ]), // end left buttons
    ])

}