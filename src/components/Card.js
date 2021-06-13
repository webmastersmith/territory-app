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
import plusSVG from '../images/plus.svg'
import xSVG from '../images/x.svg'
// import xWhiteSVG from '../images/x-white.svg'
import eStopSVG from '../images/estop.svg'
import trashSVG from '../images/trash.svg'
import googleMapSVG from '../images/google-maps.svg'
import arrowDownSVG from '../images/arrow-down.svg'
import arrowUpSVG from '../images/arrow-up.svg'
import distanceSVG from '../images/distance.svg'
import { btnCSS, btnShowMore, btn } from './button'
import { deleteLot, showOwnerProperty, singleUpload } from "../Controller"
import getOwnerProperty from "./AllProperty"
import exemptCodes from './exemptionCodes'
import styles from './Card.module.scss'
const { div, p, img, span, button, a } = hh(h)

function getSize(num) {
    try {
        if (num > 9) {
            return 'w-8 h-8 p-1'
        } else {
            return 'w-6 h-6 p-1'
        }
    } catch(e) {
        return ''
    }
}



export default function card(dispatch, model, owner) {
    return div({ className: `flex flex-col mx-2 sm:mx-auto relative bg-cardBackground my-6 rounded-3xl shadow-xl max-w-max` }, [
        // thumbnail image
        a({className: ``,
            href: owner.coordinates.lat
                ? `https://www.google.com/maps/search/${owner.coordinates.lat},${owner.coordinates.lng}`
                : `https://www.google.com/maps/search/${owner.physicalAddress.replace(/\s/g, '+')}+${owner.physicalCity}+${owner.physicalState}+${owner.physicalZip}`,
            target: '_blank'
        }, [
            div({className: `w-100 h-200px bg-gray-200 rounded-t-3xl has-tooltip`}, [
                // tooltip
                span({className: `tooltip text-sm whitespace-nowrap rounded shadow-lg p-2 bg-green-100 text-red-500 -top-14 mx-auto left-0 right-0 text-center`}, `Google Maps: ${owner.physicalAddress}`),
                // image
                owner.thumbnail 
                ? img({className: `w-100 h-200px rounded-t-3xl`, src: owner.thumbnail},)
                : div({className: `text-center pt-24`}, `image not available`)
            ]),
        ]),

        // landId
        div({className: `w-100 text-center`}, [
            p({className: `rounded text-textColor text-sm inline`}, owner.landId),
        ]),        

        // mx div provide padding for all content except image
        div({className: `px-6 pt-1 pb-6 flex-grow flex flex-col`}, [
            // top circle img
            div({className: `flex-shrink flex items-center absolute rounded-full py-4 px-4 shadow-xl ${owner.allTrue ? 'bg-green-500' : 'hidden'} left-4 -top-6`}, [
                img({
                    className: `w-6 h-6 fill-current ${owner.allTrue?'block':'hidden'}`,
                    src: checkMarkSVG,
                }), // end img svg
            ]), // end img div
    
            // single card redo plus svg.
            div({className: `${model.key ? 'inline' : 'hidden'} absolute w-100 -top-2 left-0 text-center`},
                button({className: ``,
                   onclick: e => dispatch(singleUpload(owner.landId)),
            }, [
                img({className: `w-8 h-8 inline ml-28`, src: plusSVG})
            ])),
    
            // closing x
            div({className: `absolute has-tooltip -top-0 -right-0 shadow-xl`}, [
                span({className: `tooltip text-sm whitespace-nowrap rounded shadow-lg p-2 bg-green-100 text-red-500 -top-10 right-0`}, `Delete property. ID: ${owner.landId}`),
                button({className: `relative -top-3 -right-0`,
                    onclick: e => dispatch(deleteLot(owner.landId)),
                }, [
                    img({className: `w-8 h-8`, src: trashSVG})
                ]),          
            ]),

    
            // main content div -equal bottom alignment needs flex-col
            div({className: `flex-grow flex flex-col`},[
                // name
                div({className: `has-tooltip flex my-2`}, [
                    span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 top-4 left-1/2 w-80%`, style:{transform: 'translate(-50%, -50%)'}}, `Last Name, First Name, Spouse. ID: ${owner.ownerId}`),
                    img({className: `w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4 flex-none`, src: personSVG},),
                    p({className: ` flex-grow flex-shrink text-base text-textColor sm:text-xl font-semibold relative top-0.5 sm:top-1`}, [
                        // show all property owned
                        owner.name,
                        span({className: `inline-flex items-center justify-center bg-accent text-accentText rounded-full cursor-pointer text-sm relative -top-3.5 ${getSize(owner.ownerProperty.length)}`, 
                            onclick: () => dispatch(showOwnerProperty(owner.landId)),
                        }, owner.ownerProperty.length),
                    ]),
                ]),
                // deed
                div({className: `flex space-x-4 space-x-reverse my-2 has-tooltip`}, [
                    span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 top-4 left-1/2 w-80%`, style:{transform: 'translate(-50%, -50%)'}}, `Deed. ${owner.name} owns ${parseInt(owner.ownership)}% of property ID: ${owner.landId}`),
                    img({className: `w-5 h-5 sm:w-8 sm:h-6 flex-none`, src: deedSVG},),
                    p({className: `flex-grow flex-shrink text-sm sm:text-base ${owner.nameDeedSame ? 'text-textColor' : 'text-red-500'}`}, owner.deed),
                    img({className: `w-6 h-3 sm:w-8 sm:h-4 relative top-1 ml-auto flex-none`, 
                        src: owner.nameDeedSame ? checkMarkGreenSVG : xSVG
                    },),
                ]),
                // Physical Address
                div({className: `flex space-x-4 space-x-reverse my-2 has-tooltip`}, [
                    span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 top-4 left-1/2 w-80%`, style:{transform: 'translate(-50%, -50%)'}}, `Physical address of the property. ID: ${owner.landId}`),
                    img({className: `w-5 h-5 sm:w-8 sm:h-6 flex-none`, src: addressSVG},),
                    p({className: `flex-grow flex-shrink text-sm text-textColor sm:text-base text-gray-500 relative`}, [
                        span({className: `mr-2`}, owner.physicalAddress),
                        span({className: `text-sm uppercase italic inline-block relative ${owner.physicalCity === "LUFKIN" ? 'text-textColor' : 'text-red-400'}`}, [
                            `${owner.physicalCity} ${owner.physicalState} ${owner.physicalZip}`,
                            a({className: ``, 
                            href: owner.coordinates.lat
                                ? `https://www.google.com/maps/search/${owner.coordinates.lat},${owner.coordinates.lng}`
                                : `https://www.google.com/maps/search/${owner.physicalAddress.replace(/\s/g, '+')}+${owner.physicalCity}+${owner.physicalState}+${owner.physicalZip}`,
                            target: '_blank'
                            }, [
                                img({className: `w-5 h-5 inline-block relative bottom-2`, src: googleMapSVG},),
                            ]) // end a
                        ]), // end span
                    ]),  // end p
                    img({className: `w-6 h-3 sm:w-8 sm:h-4 relative top-1 flex-none`, src: owner.addressSame ? checkMarkGreenSVG : xSVG},),
                ]),
                // Mailing Address
                div({className: `flex space-x-4 space-x-reverse my-2 has-tooltip`}, [
                    span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 top-4 left-1/2 w-80%`, style:{transform: 'translate(-50%, -50%)'}}, `Mailing address of ${owner.name}`),
                    img({className: `w-5 h-5 sm:w-8 sm:h-6 flex-none`, src: homeSVG},),
                    p({className: `flex-grow flex-shrink text-sm sm:text-base pr-2 ${owner.addressSame ? 'text-textColor' : 'text-red-500'}`},[
                        span({className: `mr-2`}, owner.mailingAddress),
                        span({className: `text-sm uppercase italic inline-block relative ${owner.mailingCity === "LUFKIN" ? 'text-textColor' : 'text-red-400'} ${owner.addressSame ? 'text-textColor' : 'text-red-400'}`},[
                            `${owner.mailingCity} ${owner.mailingState} ${owner.mailingZip}`,
                            // google maps link
                            a({className: `${(/P\s?O BOX/).test(owner.mailingAddress) ? 'hidden':'inline-block'}`, 
                                href: `https://www.google.com/maps/search/${owner.mailingAddress.replace(/\s/g, '+')}+${owner.mailingCity}+${owner.mailingState}+${owner.mailingZip}`,
                                target: '_blank'
                            }, [
                                img({className: `w-5 h-5 inline-block relative bottom-2`, src: googleMapSVG},),
                            ])
                        ])
                    ]),
                    img({className: `w-6 h-3 sm:w-8 sm:h-4 relative top-1 flex-none`, 
                        src: owner.addressSame ? checkMarkGreenSVG : xSVG
                    }),
                ]),
                // show distance image
                div({className: `flex justify-center ${(/PO BOX/).test(owner.mailingAddress) ? 'hidden': 'block' }`}, [
                    a({className: `w-5 h-5 ${owner.addressSame ? 'hidden': owner.physicalAddress === 'empty' ? 'hidden' : owner.mailingAddress === 'empty' ? 'hidden' :'flex'}`, 
                        href: `https://www.google.com/maps/dir/${owner.physicalAddress.replace(/\s/, '+')}+${owner.physicalCity}+${owner.physicalState}+${owner.physicalZip}/${owner.mailingAddress.replace(/\s/, '+')}+${owner.mailingCity}+${owner.mailingState}+${owner.mailingZip}`,
                        target: '_blank'
                    }, [
                        img({className: `inline-block`, src: googleMapSVG},),
                        img({className: `inline-block`, src: distanceSVG},),
                        img({className: `inline-block`, src: googleMapSVG},),
                    ]),  // end a
                ]), // end distance div
    
                // exemptions
                div({className: `space-x-4 space-x-reverse my-2 has-tooltip ${owner.exemptions.length === 0 ? 'hidden' : 'flex'}`}, [
                    span({className: `tooltip whitespace-pre-line rounded shadow-lg p-2 bg-green-100 text-red-500 top-4 left-1/2 w-80%`, style:{transform: 'translate(-50%, -50%)'}}, `EXEMPTION CODES:\n${owner.exemptions.map(code => `${code}: ${exemptCodes[code]}\n`).join('')}`
                    ),
                    img({className: `w-5 h-5 sm:w-8 sm:h-6 flex-none`, src: eStopSVG},),
                    p({className: `text-sm sm:text-base flex-grow flex-shrink text-textColor`},[
                        owner.exemptions.map(code => code + ' ')
                    ]),
                ]), 
                // grow div
                div({className: `flex-grow flex-shrink ${owner.showOwnerProperty?'hidden':'block'}`},),

                // show/hide more info button
                div({className: `flex justify-center w-100`}, [
                    button({
                        className: `${btn} ${styles.bttnButton1} ${styles.bttn} w-70%`,
                        onclick: () => dispatch(showOwnerProperty(owner.landId))
                    }, [
                        owner.showOwnerProperty? 'Show Less ': 'Show More',
                        img({className: `w-3 h-3 relative top-1 -right-1.5`, src:  owner.showOwnerProperty ? arrowUpSVG : arrowDownSVG},)
                    ]),
                ]),
                // div({className: `text-blue-500 flex justify-center w-100`}, [
                //     button({
                //         className: `${btnShowMore('bg-gray-300', 'bg-gray-400', 'text-black', 'text-sm')} flex justify-center`,
                //         onclick: () => dispatch(showOwnerProperty(owner.landId))
                //     }, [
                //         owner.showOwnerProperty? 'Show Less ': 'Show More',
                //         img({className: `w-3 h-3 relative top-1 -right-1.5 `, src:  owner.showOwnerProperty ? arrowUpSVG : arrowDownSVG},)
                //     ]),
                // ]),

                //hidden owner property's
                div({className: `${owner.showOwnerProperty ? 'flex flex-col' : 'hidden'} `}, [
                    // horizontal rule
                    div({className: `flex justify-center w-100 my-2`}, [
                        div({className: `border-gray-500 border w-90%`},)
                    ]),
                    // owner container
                    getOwnerProperty(dispatch, model, owner)
                ]),
    
                // grow div
                div({className: `flex-grow flex-shrink ${owner.showOwnerProperty?'block':'hidden'}`},),
                // horizontal rule
                div({className: `flex justify-center w-100 mt-4 mb-8`}, [
                    div({className: `border-gray-500 border w-90%`},)
                ]),
                // buttons color:hover-color:text-color:text-size
                div({className: `flex justify-around`}, [
                    div({className: `has-tooltip relative w-40%`}, [
                        span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 text-sm whitespace-nowrap -top-10 left-6`}, `Property Details`),
                        a({className: ``, href: owner.urlOwnerDetails, target: '_blank' },
                            button({className: `${styles.bttn} ${styles.bttnButton1} w-100%`}, [
                                img({className: `w-8 h-8`, src:  homeBlackSVG},)
                            ]),
                        ),
                    ]),
                    div({className: `has-tooltip relative w-40%`}, [
                        span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 text-sm whitespace-nowrap -top-10 left-10`}, `View Map`),
                        a({className: ``, href: owner.urlLandMap, target: '_blank' },
                            button({className: `${styles.bttnButton1} ${styles.bttn} w-100%`}, [
                                img({className: `w-8 h-8`, src:  addressBlackSVG},)
                            ]),
                        ),
                    ]),
                ]),

                
                
            ]), // main content flex-col
        ]), // end mx margin div
    ])  // end flex card div
}
