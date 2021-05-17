import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import personSVG from '../images/person.svg'
import deedSVG from '../images/deed.svg'
import addressSVG from '../images/address.svg'
import propertySVG from '../images/property.svg'

import addressBlackSVG from '../images/address-black.svg'
import homeSVG from '../images/home.svg'
import homeBlackSVG from '../images/home-black.svg'

const { div, p, img, span, button, a } = hh(h)

// map
// `https://propaccess.trueautomation.com/mapSearch/?cid=71&p=${owner.landId}`
// details
// `https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_${owner.landId}}`
export default function getOwnerProperty(model, owner) {
    // if only 1 property, data is repeated so just show price.
    if (owner.ownerProperty.length === 1) {
        return div({className: ``}, [
            // Price
            div({className: `flex space-x-4 space-x-reverse my-2 has-tooltip relative`}, [
                img({className: `w-5 h-5 sm:w-8 sm:h-6 flex-none`, src: propertySVG},),
                p({className: `flex-grow flex-shrink text-sm sm:text-base text-gray-500`}, owner.ownerProperty[0].price),
            ]),
            
        ])
        
    }
    // get the properties owned by ownerId
    return owner.ownerProperty.map( (prop, i) => {
       return div({className: ``}, [
           div({className: `flex justify-center`},
            p({className: `font-semibold text-red-500`}, `PROPERTY ${prop.propertyId}`),
           ),
            // name
            div({className: ``}, [
                a({className: `flex relative`,
                    href: `https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=${owner.landId}`,
                    target: '_blank',
                }, [
                    img({className: `w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-none`, src: personSVG},),
                    p({className: ` flex-grow flex-shrink text-xs sm:text-sm top-0.5 sm:top-0.5 relative  text-blue-500 focus:ring-2 focus:ring-blue-600 visited:text-purple-500 active:text-red-500 underline cursor-pointer `}, prop.name),
                ]),

            ]),

            // deed
            div({className: `flex mr-1 sm:mr-3 my-2 `}, [
                img({className: `w-4 h-4 sm:w-5 sm:h-5 flex-none mr-2 sm:mr-3`, src: deedSVG},),
                p({className: `flex-grow flex-shrink text-xs sm:text-sm text-gray-500 relative top-0.5 sm:top-0`}, owner.deed),
            ]),

            // Physical Address
            div({className: `flex my-2`}, [
                a({className: `flex relative`,
                href: `https://propaccess.trueautomation.com/mapSearch/?cid=71&p=${owner.landId}`,
                target: '_blank',
            }, [
                img({className: `w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-none`, src: addressSVG},),
                p({className: ` flex-grow flex-shrink text-xs sm:text-sm top-0.5 sm:top-0.5 relative  text-blue-500 focus:ring-2 focus:ring-blue-600 visited:text-purple-500 active:text-red-500 underline cursor-pointer `}, prop.propertyAddress),
            ]),


                // img({className: `w-4 h-4 sm:w-5 sm:h-5 flex-none mr-2 sm:mr-3`, src: addressSVG},),
                // p({className: `flex-grow flex-shrink text-xs sm:text-sm text-gray-500 relative top-px sm:top-px`}, prop.propertyAddress),
            ]),

            // Price
            div({className: `flex my-2`}, [
                img({className: `w-4 h-4 sm:w-5 sm:h-5 flex-none mr-2 sm:mr-3`, src: propertySVG},),
                p({className: `flex-grow flex-shrink text-xs sm:text-sm text-green-500 relative top-px sm:top-px`}, prop.price),
            ]),

        ])
    }) // map
}
