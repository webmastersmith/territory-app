import hh from "hyperscript-helpers"
import { h } from "virtual-dom"
import personSVG from '../images/person.svg'
import deedSVG from '../images/deed.svg'
import addressSVG from '../images/address.svg'
import propertySVG from '../images/property.svg'
import xWhiteSVG from '../images/x-white.svg'
import googleMapSVG from '../images/google-maps.svg'
import { deleteLot } from "../Controller"

const { div, p, img, span, button, a } = hh(h)

// map
// `https://propaccess.trueautomation.com/mapSearch/?cid=71&p=${owner.landId}`
// details
// `https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_${owner.landId}}`

export default function getOwnerProperty(dispatch, model, owner) {
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

    // ownerProperty match card landId, move property to top of list
    const singleOwnerProperty = owner.ownerProperty.filter(property => property.propertyId === owner.landId)
    const otherOwnerProperty = owner.ownerProperty.filter(property => property.propertyId !== owner.landId)
    const ownerProperty = [...singleOwnerProperty, ...otherOwnerProperty]

    // ownerArr: {
    //     propertyId: any;
    //     propertyAddress: any;
    //     name: any;
    //     price: any;
    //     territory: String;
    //     inTerritory: Boolean;
    // }
    // get the properties owned by ownerId
    return ownerProperty.map( (prop, i) => {
        // 1st property is same as card so just show price.
        if (prop.propertyId === owner.landId) {
            return div({className: ``}, [
                div({className: `flex justify-center`},
                 p({className: `relative font-semibold text-green-500`},  `This Property`),
                ),
                // Price
                div({className: `flex my-2`}, [
                    img({className: `w-4 h-4 sm:w-5 sm:h-5 flex-none mr-2 sm:mr-3`, src: propertySVG},),
                    p({className: `flex-grow flex-shrink text-xs sm:text-sm text-green-500 relative top-px sm:top-px`}, prop.price),
                ]),
            ])     
        }
        
        // if multiple properties, show them.
        return div({className: ``}, [
           div({className: `flex justify-center`},
            p({className: `relative font-semibold ${prop.inTerritory ? 'text-red-500' : 'text-blue-500'}`}, [
                `${prop.propertyId === owner.landId ? 'This Territory' : `Territory ${prop.territory}`}`,
                div({className: `absolute has-tooltip -top-2 -right-4 shadow-xl`}, [
                    span({className: `tooltip text-sm whitespace-nowrap rounded shadow-lg p-2 bg-green-100 text-red-500 -top-10 right-0`}, `Delete property. ID: ${prop.propertyId}`),
                    button({className: `p-1 bg-red-500 rounded-full`,
                        onclick: e => dispatch(deleteLot(prop.propertyId)),
                    }, [
                        img({className: `w-2 h-2`, src: xWhiteSVG})
                    ]),          
                ]),
        
            ]),
           ),

            // name
            div({className: ``}, [
                a({className: `flex relative`,
                    href: `https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=${prop.propertyId}`,
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
            div({className: `flex my-2 relative`}, [
                a({className: `flex `,
                    href: `https://propaccess.trueautomation.com/mapSearch/?cid=71&p=${prop.propertyId}`,
                    target: '_blank',
                }, [
                    img({className: `w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-none`, src: addressSVG},),
                    p({className: ` flex-grow flex-shrink text-xs sm:text-sm top-0.5 sm:top-0.5 relative  text-blue-500 focus:ring-2 focus:ring-blue-600 visited:text-purple-500 active:text-red-500 underline cursor-pointer `}, [
                        prop.propertyAddress,
                    ],),
                    ]),
                    span({className: `whitespace-pre-wrap`}, ' '),
                a({className: `${prop.propertyAddress === 'empty' ? 'hidden' : 'inline-block'}`, 
                    href: `https://www.google.com/maps/search/${prop.propertyAddress.replace(/,/, '').replace(/\s/g, '+')}`,
                    target: '_blank'
                }, [
                    img({className: `w-5 h-5 inline-block absolute top-0`, src: googleMapSVG}),
                ]),

            ]),

            // Price
            div({className: `flex my-2`}, [
                img({className: `w-4 h-4 sm:w-5 sm:h-5 flex-none mr-2 sm:mr-3`, src: propertySVG},),
                p({className: `flex-grow flex-shrink text-xs sm:text-sm text-green-500 relative top-px sm:top-px`}, prop.price),
            ]),

        ])
    }) // map
}
