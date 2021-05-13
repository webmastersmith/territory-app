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
    // get the properties owned by ownerId
    const props = model.ownerProperty[owner.ownerId]
    return props.map( (prop, i) => {
       return div({className: ``}, [
           div({className: `flex justify-center`},
            p({className: `font-semibold`}, `PROPERTY ${i+1}`),
           ),
            // name
            div({className: ``}, [
                a({className: `flex relative`,
                    href: `https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=${owner.landId}`,
                    target: '_blank',
                }, [
                    img({className: `w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-3 flex-none`, src: personSVG},),
                    p({className: ` flex-grow flex-shrink text-sm sm:base `}, prop.name),
                ]),

            ]),

            // deed
            div({className: `flex mr-1 sm:mr-3 my-2 `}, [
                img({className: `w-3 h-3 sm:w-5 sm:h-5 flex-none`, src: deedSVG},),
                p({className: `flex-grow flex-shrink text-sm sm:text-base text-gray-500`}, owner.deed),
            ]),

            // Physical Address
            div({className: `flex space-x-4 space-x-reverse my-2 has-tooltip relative`}, [
                img({className: `w-5 h-5 sm:w-8 sm:h-6 flex-none`, src: addressSVG},),
                p({className: `flex-grow flex-shrink text-sm sm:text-base text-gray-500`}, prop.propertyAddress),
            ]),
            // Price
            div({className: `flex space-x-4 space-x-reverse my-2 has-tooltip relative`}, [
                img({className: `w-5 h-5 sm:w-8 sm:h-6 flex-none`, src: propertySVG},),
                p({className: `flex-grow flex-shrink text-sm sm:text-base text-gray-500`}, prop.price),
            ]),

        ])
    }) // map
}
