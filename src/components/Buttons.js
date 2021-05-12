import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import trashSVG from "../images/trash.svg"
import saveSVG from "../images/save.svg"
import uploadSVG from "../images/upload.svg"
import bulkUploadSVG from "../images/bulk-upload.svg"
import localStorageSVG from "../images/localStorage.svg"
import printerSVG from "../images/printer.svg"
import { clearStorage, uploadStorage, bulkUpload, getLocalStorage } from '../Controller'
import Print from './Print'

const { div, input, img, a, span } = hh(h)



export default function (dispatch, model) {
    return div({className: `flex my-2 `}, [
        
        // left buttons group
        div({className: `flex justify-between w-85% sm:w-84`}, [
            // save button
            div({className: `has-tooltip relative`}, [
                span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 -bottom-12`}, `Save`),
                a({className: ``, 
                    href: URL.createObjectURL(new Blob([localStorage.getItem('model')], {type: 'text/json'})),
                    target: '_blank',
                    download: model.bulkUpload ? `Territory_${model.territory.replace(/\.\w+$/i, '')}.json` : model.road + '.json',
                },
                    img({className: `w-10 h-10 cursor-pointer`, src: saveSVG,},),
                ),
            ]),
    
            // upload button
            div({className: `has-tooltip relative`}, [
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
            div({className: `has-tooltip relative`}, [
                span({className: `tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -left-4`}, `Bulk Upload From Territory Servant`),
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
    
            // local storage upload
            div({className: `has-tooltip relative`}, [
                span({className: `tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -left-4`}, `${localStorage.getItem('model') ? 'Local Storage' : 'Local Storage is Empty'}`),
                img({className: `w-10 h-10 cursor-pointer`, 
                    src: localStorageSVG,
                    onclick: () => dispatch(getLocalStorage),
                },)
            ]),
    
            // printer
            div({className: `has-tooltip relative`}, [
                span({className: `tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 left-0`}, `Print`),
                a({className: ``, 
                    href: URL.createObjectURL(new Blob(Print(model.owners), {type: 'text/plain'})),
                    target: '_blank',
                    download: `Territory_${model.territory.replace(/\.\w+$/i, '')}.txt`,
                }, 
                    img({className: `w-10 h-10 cursor-pointer`, src: printerSVG})
                ),
            ]),			
        ]), // end left buttons


        // trash button
        div({className: `has-tooltip relative ml-auto`}, [
            span({className: `tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -right-7`}, `Start Over`),
            img({className: `w-10 h-10 cursor-pointer`, 
                src: trashSVG,
                onclick: () => dispatch(clearStorage),
            },)
        ]),
    ])

}