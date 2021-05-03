import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import personSVG from '../images/person.svg'
import checkMarkSVG from '../images/checkmark.svg'
import deedSVG from '../images/deed.svg'
import handSVG from '../images/hand.svg'
import checkMarkGreenSVG from '../images/checkmark-green.svg'
import addressSVG from '../images/address.svg'
import homeSVG from '../images/home.svg'
const { div, h1, p, img, span, object } = hh(h)


export default function card(dispatch, model, owner) {
	return div({ className: `relative bg-white py-6 px-6 rounded-3xl my-16 shadow-xl max-w-max` }, [
		// top circle img
		div({className: `text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6`}, [
			img({
				className: `w-6 h-6 fill-current`,
				src: checkMarkSVG,
		}), // end img svg
		]), // end img div
		
		// main content div
		div({className: `mt-8`},[
			// name
			div({className: `has-tooltip relative flex space-x-4 space-x-reverse`}, [
				span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 -top-10 left-12`}, 'Last Name, First Name, Spouse'),
				img({className: `w-8 h-8`, src: personSVG},),
				p({className: `text-xl font-semibold relative top-1 whitespace-nowrap`}, owner.name),
			]),
			// deed
			div({className: `flex space-x-4 space-x-reverse my-4 has-tooltip relative`}, [
                span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 -top-10 left-12`}, `Deed. ${owner.name} owns ${parseInt(owner.ownership)}% of this property.`),
				img({className: `w-8 h-6`, src: deedSVG},),
				p({className: `flex-grow flex-shrink-0`}, [
                    owner.deed,
					span({className: `text-green-500 ml-4`}, `${parseInt(owner.ownership)}%`)
				]),
                img({className: `w-8 h-4 relative top-1`, src: checkMarkGreenSVG},),
			]),
            // Physical Address
			div({className: `flex space-x-4 space-x-reverse my-4 has-tooltip relative`}, [
                span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 -top-10 left-12`}, `Physical address of the property.`),
				img({className: `w-8 h-6`, src: addressSVG},),
				p({className: `flex-grow flex-shrink-0`}, [
                    owner.address,
                    span({className: `text-sm ml-4 uppercase italic`},`${owner.city} ${owner.state} ${owner.zip}`)
                ]),
                img({className: `w-8 h-4 relative top-1`, src: checkMarkGreenSVG},),
			]),
            // Mailing Address
			div({className: `flex space-x-4 space-x-reverse my-4 has-tooltip relative`}, [
                span({className: `tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 -top-10 left-12`}, `Mailing address of ${owner.name}.`),
				img({className: `w-8 h-6`, src: homeSVG},),
				p({className: `flex-grow flex-shrink-0`},[
                    owner.address,
                    span({className: `text-sm ml-4 uppercase italic`},`${owner.city} ${owner.state} ${owner.zip}`)
                ]),
                img({className: `w-8 h-4 relative top-1`, src: checkMarkGreenSVG},),
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
