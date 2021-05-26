import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import personSVG from '../images/person.svg'
import checkMarkSVG from '../images/checkmark.svg'
import deedSVG from '../images/deed.svg'
import handSVG from '../images/hand.svg'
import checkMarkGreenSVG from '../images/checkmark-green.svg'
import addressSVG from '../images/address.svg'
import addressBlackSVG from '../images/address-black.svg'
import homeSVG from '../images/home.svg'
import homeBlackSVG from '../images/home-black.svg'
import xSVG from '../images/x.svg'
import xWhiteSVG from '../images/x-white.svg'
import eStopSVG from '../images/estop.svg'
import googleMapSVG from '../images/google-maps.svg'
import distanceSVG from '../images/distance.svg'
import { btnCSS } from './button'
import { deleteLot, showOwnerProperty } from "../Controller"
import getOwnerProperty from "./AllProperty"
import exemptCodes from './exemptionCodes'
const { div, p, img, span, button, a } = hh(h)

function getSize(num) {
    try {
        if (num > 9) {
            return '-right-8 -top-2 w-9 h- p-1'
        } else {
            return '-right-6 -top-2 w-6 h-6'
        }
    } catch(e) {
        return ''
    }
}



export default function card(dispatch, model, owner) {
    return div({ className: `flex mx-2 sm:mx-auto relative bg-white my-6 py-6 px-6 rounded-3xl shadow-xl max-w-max` }, [
        // top circle img
        div({className: `flex-shrink flex items-center absolute rounded-full py-4 px-4 shadow-xl ${owner.allTrue ? 'bg-green-500' : 'bg-yellow-1'} left-4 -top-6`}, [
            img({
                className: `w-6 h-6 fill-current`,
                src: owner.allTrue ? checkMarkSVG : handSVG,
            }), // end img svg
        ]), // end img div
        // closing x
        div({className: `absolute has-tooltip -top-0 -right-0 shadow-xl`}, [
            span({className: `tooltip text-sm whitespace-nowrap rounded shadow-lg p-2 bg-green-100 text-red-500 -top-10 right-0`}, `Delete property. ID: ${owner.landId}`),
            button({className: `p-2 bg-red-500 rounded-full`,
                onclick: e => dispatch(deleteLot(owner.landId)),
            }, [
                img({className: `w-3 h-3`, src: xWhiteSVG})
            ]),          
        ]),

        // main content div -equal bottom alignment needs flex-col
        div({className: `mt-8 flex flex-col`},[
            // name
            div({className: `has-tooltip flex my-2`}, [
                span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 top-4 left-1/2 w-80%`, style:{transform: 'translate(-50%, -50%)'}}, `Last Name, First Name, Spouse. ID: ${owner.ownerId}`),
                img({className: `w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4 flex-none`, src: personSVG},),
                p({className: ` flex-grow flex-shrink text-base sm:text-xl font-semibold relative top-0.5 sm:top-1`}, [
                    // show all property owned
                    owner.name,
                    span({className: `inline-flex items-center justify-center bg-green-200 rounded-full cursor-pointer text-sm relative top-2 left-0 ${getSize(owner.ownerProperty.length)}`, 
                        onclick: () => dispatch(showOwnerProperty(owner.landId)),
                    }, owner.ownerProperty.length),
                ]),
            ]),
            // deed
            div({className: `flex space-x-4 space-x-reverse my-2 has-tooltip`}, [
                span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 top-4 left-1/2 w-80%`, style:{transform: 'translate(-50%, -50%)'}}, `Deed. ${owner.name} owns ${parseInt(owner.ownership)}% of property ID: ${owner.landId}`),
                img({className: `w-5 h-5 sm:w-8 sm:h-6 flex-none`, src: deedSVG},),
                p({className: `flex-grow flex-shrink text-sm sm:text-base ${owner.nameDeedSame ? 'text-gray-500' : 'text-red-500'}`}, owner.deed),
                img({className: `w-6 h-3 sm:w-8 sm:h-4 relative top-1 ml-auto flex-none`, 
                    src: owner.nameDeedSame ? checkMarkGreenSVG : xSVG
                },),
            ]),
            // Physical Address
            div({className: `flex space-x-4 space-x-reverse my-2 has-tooltip`}, [
                span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 top-4 left-1/2 w-80%`, style:{transform: 'translate(-50%, -50%)'}}, `Physical address of the property. ID: ${owner.landId}`),
                img({className: `w-5 h-5 sm:w-8 sm:h-6 flex-none`, src: addressSVG},),
                p({className: `flex-grow flex-shrink text-sm sm:text-base text-gray-500`}, [
                    span({className: `mr-2`}, owner.physicalAddress),
                    span({className: `text-sm uppercase italic inline-block relative ${owner.physicalCity === "LUFKIN" ? 'text-gray-400' : 'text-red-400'}`}, [
                        `${owner.physicalCity} ${owner.physicalState} ${owner.physicalZip}`,
                        a({className: ``, 
                            href: `https://www.google.com/maps/search/${owner.physicalAddress.replace(/\s/g, '+')}+${owner.physicalCity}+${owner.physicalState}+${owner.physicalZip}`,
                            target: '_blank'
                        }, [
                            img({className: `w-5 h-5 inline-block absolute -top-1 -right-5`, src: googleMapSVG},),
                        ])
                    ])
                ]),
                img({className: `w-6 h-3 sm:w-8 sm:h-4 relative top-1 flex-none`, src: owner.addressSame ? checkMarkGreenSVG : xSVG},),
            ]),
            // Mailing Address
            div({className: `flex space-x-4 space-x-reverse my-2 has-tooltip`}, [
                span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 top-4 left-1/2 w-80%`, style:{transform: 'translate(-50%, -50%)'}}, `Mailing address of ${owner.name}`),
                img({className: `w-5 h-5 sm:w-8 sm:h-6 flex-none`, src: homeSVG},),
                p({className: `flex-grow flex-shrink text-sm sm:text-base pr-2 ${owner.addressSame ? 'text-gray-500' : 'text-red-500'}`},[
                    span({className: `mr-2`}, owner.mailingAddress),
                    span({className: `text-sm uppercase italic inline-block relative ${owner.mailingCity === "LUFKIN" ? 'text-gray-400' : 'text-red-400'} ${owner.addressSame ? 'text-gray-400' : 'text-red-400'}`},[
                        `${owner.mailingCity} ${owner.mailingState} ${owner.mailingZip}`,
                        // google maps link
                        a({className: `${(/PO BOX/).test(owner.mailingAddress) ? 'hidden':'inline-block'}`, 
                            href: `https://www.google.com/maps/search/${owner.mailingAddress.replace(/\s/g, '+')}+${owner.mailingCity}+${owner.mailingState}+${owner.mailingZip}`,
                            target: '_blank'
                        }, [
                            img({className: `w-5 h-5 inline-block absolute -top-1 -right-5`, src: googleMapSVG},),
                        ])
                    ])
                ]),
                img({className: `w-6 h-3 sm:w-8 sm:h-4 relative top-1 flex-none`, 
                    src: owner.addressSame ? checkMarkGreenSVG : xSVG
                }),
            ]),
            // show distance image
            div({className: `flex justify-center ${(/PO BOX/).test(owner.mailingAddress) ? 'hidden': 'block' }`}, [
                a({className: `w-5 h-5 ${owner.addressSame ? 'hidden':'flex'}`, 
                    href: `https://www.google.com/maps/dir/${owner.physicalAddress.replace(/\s/, '+')}+${owner.physicalCity}+${owner.physicalState}+${owner.physicalZip}/${owner.mailingAddress.replace(/\s/, '+')}+${owner.mailingCity}+${owner.mailingState}+${owner.mailingZip}`,
                    target: '_blank'
                }, [
                    img({className: ``, src: googleMapSVG},),
                    img({className: ``, src: distanceSVG},),
                    img({className: ``, src: googleMapSVG},),
    
                ]),
            ]), // end distance div

            // exemptions
            div({className: `space-x-4 space-x-reverse my-2 has-tooltip ${owner.exemptions.length === 0 ? 'hidden' : 'flex'}`}, [
                span({className: `tooltip whitespace-pre-line rounded shadow-lg p-2 bg-green-100 text-red-500 top-4 left-1/2 w-80%`, style:{transform: 'translate(-50%, -50%)'}}, `EXEMPTION CODES:\n${owner.exemptions.map(code => `${code}: ${exemptCodes[code]}\n`).join('')}`
                ),
                img({className: `w-5 h-5 sm:w-8 sm:h-6 flex-none`, src: eStopSVG},),
                p({className: `text-sm sm:text-base flex-grow flex-shrink text-green-500`},[
                    owner.exemptions.map(code => code + ' ')
                ]),
            ]), 
            
            //hidden owner property's
            div({className: `${owner.showOwnerProperty ? 'flex flex-col' : 'hidden'} `}, [
                // horizontal rule
                div({className: `${owner.ownerProperty.length === 1 ? 'hidden' : 'flex'} justify-center w-100 my-4`}, [
                    div({className: `border-gray-500 border w-90%`},)
                ]),
                // owner container
                getOwnerProperty(dispatch, model, owner)

            ]),

            // grow div
            div({className: `flex-grow flex-shrink`},),
            // horizontal rule
            div({className: `flex justify-center w-100 mt-4 mb-8`}, [
                div({className: `border-gray-500 border w-90%`},)
            ]),
            // buttons color:hover-color:text-color:text-size
            div({className: `flex justify-around`}, [
                div({className: `has-tooltip relative w-40%`}, [
                    span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 text-sm whitespace-nowrap -top-10 left-6`}, `Property Details`),
                    a({className: ``, href: owner.urlOwnerDetails, target: '_blank' },
                        button({className: `${btnCSS('bg-blue-500', 'bg-blue-600')} w-100% flex justify-center items-center`}, [
                            img({className: `w-8 h-8`, src:  homeBlackSVG},)
                        ]),
                    ),
                ]),
                div({className: `has-tooltip relative w-40%`}, [
                    span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 text-sm whitespace-nowrap -top-10 left-10`}, `View Map`),
                    a({className: ``, href: owner.urlLandMap, target: '_blank' },
                        button({className: `${btnCSS('bg-green-500', 'bg-green-600')} w-100% flex justify-center items-center`}, [
                            img({className: `w-8 h-8`, src:  addressBlackSVG},)
                        ]),
                    ),
                ]),
            ]),

        ]) // main content flex-col
    ])  // end flex card div
}
