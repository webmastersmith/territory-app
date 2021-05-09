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
import { btnCSS } from './Button'
import { deleteLot } from "../Controller"
import exemptCodes from './exemptionCodes'
const { div, p, img, span, button, a, href} = hh(h)


export default function card(dispatch, owner) {
    return div({ className: `mx-2 sm:mx-auto relative bg-white my-6 py-6 px-6 rounded-3xl shadow-xl max-w-max` }, [
		// top circle img
		div({className: `text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl ${owner.allTrue ? 'bg-green-500' : 'bg-yellow-1'} left-4 -top-6`}, [
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
		// main content div
		div({className: `mt-8`},[
			// name
			div({className: `has-tooltip relative flex space-x-4 space-x-reverse`}, [
				span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 -top-10 left-16`}, `Last Name, First Name, Spouse. ID: ${owner.ownerId}`),
				img({className: `w-8 h-8`, src: personSVG},),
				p({className: `text-xl font-semibold relative top-1 whitespace-nowrap`}, owner.name),
			]),
			// deed
			div({className: `flex space-x-4 space-x-reverse my-4 has-tooltip relative`}, [
                span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 -top-16 left-16`}, `Deed. ${owner.name} owns ${parseInt(owner.ownership)}% of property ID: ${owner.landId}.`),
				img({className: `w-8 h-6`, src: deedSVG},),
				p({className: `flex-grow flex-shrink-0 ${owner.nameDeedSame ? 'text-gray-500' : 'text-red-500'}`}, [
                    owner.deed,
					span({className: `ml-4 text-green-500`}, `${parseInt(owner.ownership)}%`)
				]),
                img({className: `w-8 h-4 relative top-1`, 
                    src: owner.nameDeedSame ? checkMarkGreenSVG : xSVG
                },),
			]),
            // Physical Address
			div({className: `flex space-x-4 space-x-reverse my-4 has-tooltip relative`}, [
                span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 -top-10 left-16`}, `Physical address of the property. ID: ${owner.landId}`),
				img({className: `w-8 h-6`, src: addressSVG},),
				p({className: `flex-grow flex-shrink-0 text-gray-500`}, [
                    owner.physicalAddress,
                    span({className: `text-sm ml-4 uppercase italic ${owner.physicalCity === "LUFKIN" ? 'text-gray-400' : 'text-red-400'}`}, `${owner.physicalCity} ${owner.physicalState} ${owner.physicalZip}`)
                ]),
                img({className: `w-8 h-4 relative top-1`, src: checkMarkGreenSVG},),
			]),
            // Mailing Address
			div({className: `flex space-x-4 space-x-reverse my-4 has-tooltip relative`}, [
                span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 -top-16 left-16`}, `Mailing address of ${owner.name}.`),
				img({className: `w-8 h-6`, src: homeSVG},),
				p({className: `flex-grow flex-shrink-0 ${owner.addressSame ? 'text-gray-500' : 'text-red-500'}`},[
                    owner.mailingAddress,
                    span({className: `text-sm ml-4 uppercase italic ${owner.mailingCity === "LUFKIN" ? 'text-gray-400' : 'text-red-400'} ${owner.addressSame ? 'text-gray-400' : 'text-red-400'}`},`${owner.mailingCity} ${owner.mailingState} ${owner.mailingZip}`)
                ]),
                img({className: `w-8 h-4 relative top-1`, 
                    src: owner.addressSame ? checkMarkGreenSVG : xSVG
                }),
			]),
            // exemptions
            div({className: `space-x-4 space-x-reverse my-4 has-tooltip relative ${owner.exemptions.length === 0 ? 'hidden' : 'flex'}`}, [
                span({className: `tooltip whitespace-pre-line rounded shadow-lg p-2 bg-green-100 text-red-500 -top-16 left-16`}, `EXEMPTION CODES:\n${owner.exemptions.map(code => `${code}: ${exemptCodes[code]}\n`).join('')}`
                ),
                img({className: `w-8 h-6`, src: eStopSVG},),
                p({className: `flex-grow flex-shrink-0 text-green-500`},[
                    owner.exemptions.map(code => code + ' ')
                ]),
            ]),    

            // horizontal rule
            div({className: `flex justify-center w-100 my-8`}, [
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

		]) // main content
	])  // end card div
}

// /* <div class="">
            
            // <div class="mt-8">
            //     <p class="text-xl font-semibold my-2">App Development</p>
            //     <div class="flex space-x-2 text-gray-400 text-sm">
            //         <!-- svg  -->
            //         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            //         </svg>
            //          <p>Marketing Team</p> 
            //     </div>
            //     <div class="flex space-x-2 text-gray-400 text-sm my-3">
            //         <!-- svg  -->
            //         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            //         </svg>
            //          <p>1 Weeks Left</p> 
            //     </div>
            //     <div class="border-t-2"></div>

            //     <div class="flex justify-between">
            //         <div class="my-2">
            //             <p class="font-semibold text-base mb-2">Team Member</p>
            //             <div class="flex space-x-2">
            //                 <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            //                 class="w-6 h-6 rounded-full"/>
            //                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg" 
            //                 class="w-6 h-6 rounded-full"/>
            //                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU" 
            //                 class="w-6 h-6 rounded-full"/>
            //             </div>
            //         </div>
            //          <div class="my-2">
            //             <p class="font-semibold text-base mb-2">Progress</p>
            //             <div class="text-base text-gray-400 font-semibold">
            //                 <p>34%</p>
            //             </div>
            //         </div>
            //     </div>
            // </div>



// </div> */}
