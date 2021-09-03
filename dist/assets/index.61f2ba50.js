var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,n=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&l(e,s,t[s]);if(a)for(var s of a(t))o.call(t,s)&&l(e,s,t[s]);return e},i=(e,a)=>t(e,s(a));import{c,v as m,h as p}from"./vendor.4cd4fbdb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const d={key:!1,sortAtoZ:!0,waiting:!1,territory:"",showOwnerProperty:!0,error:null,bulkUpload:!1,missingProperty:[],showMissingProperty:!1,owners:[]},g="HTTP_SUCCESS_ITEM",h="HTTP_SUCCESS_BULK_UPLOAD_PLUS",u="HTTP_SUCCESS_SINGLE_UPLOAD",x="HTTP_ERROR",f="CLEAR_ERROR",w="DELETE_LOT",y="UPLOAD",N="SINGLE_UPLOAD",b="BULK_UPLOAD",S="BULK_UPLOAD_PLUS",v="SHOW_OWNER_PROPERTY",k="LOCAL_STORAGE",P="SHOW_MISSING_PROPERTY",O="TRASH",I="SORT_A_Z";const E={type:f},$={type:I},A={type:k},D={type:O};function T(e){return{type:v,landId:e}}function C(e){return{type:w,id:e}}const _=e=>({type:g,response:e}),L=e=>({type:h,response:e}),X=e=>({type:u,response:e}),U=e=>({type:x,error:e});function M(e){let t=[];for(const s of e)t.push(...s.ownerProperty.filter((e=>"empty"===e.territory)));return t.map((e=>e.propertyId))}function V(e){let t=e;return e.hasOwnProperty("sortAtoZ")||(t=i(n({},e),{sortAtoZ:!0})),t}function j(e,t){return e?(t.sort(((e,t)=>(e=e.name)<(t=t.name)?-1:t<e?1:0)),t):(t.sort(((e,t)=>(e=parseInt(e.landId))<(t=parseInt(t.landId))?-1:t<e?1:0)),t)}var H="/assets/deed.8f50fb76.svg",R="/assets/checkmark-green.d94d5722.svg",B="/assets/x.ff74cd51.svg",J="/assets/trash.ac835838.svg",Z="/assets/google-maps.81b0a225.svg";const{div:F,p:z,img:G,span:q,button:Y,a:K}=p(m.h);function W(e,t,s){const a=F({className:"my-2"},[z({className:"font-bold text-sm"},"Improvements".toUpperCase()),s.improvements[0].improvement?s.improvements.map((e=>F({className:"flex text-xs mx-2"},[q({className:"flex-shrink"},`${e.improvement} `),q({className:"flex-1 whitespace-nowrap text-center"},e.improvementDetails),q({className:""+(e.sqft?"flex-1":"hidden")},e.sqft),q({className:"flex-shrink text-right"},`${e.value}`)]))):z({className:"mx-2 text-xs"},"No improvements to land listed."),z({className:"font-bold text-sm mt-2"},"Land".toUpperCase()),s.lands[0].landType?s.lands.map((e=>F({className:"flex text-xs mx-2"},[q({className:"flex-1"},e.landType),q({className:"flex-1 text-center"},`acres: ${parseFloat(e.acres).toString()}`),q({className:" flex-1 text-right whitespace-nowrap"},`${e.marketValue}`)]))):z({className:"mx-2 text-xs"},"No land listed.")]);if(1===s.ownerProperty.length)return F({className:""},[a,F({className:"flex my-2"},[z({className:"font-bold text-sm"},[`${"Total Tax Value".toUpperCase()}: `,q({className:"ml-2 text-green-500"},s.ownerProperty[0].price)])])]);return[...s.ownerProperty.filter((e=>e.propertyId===s.landId)),...s.ownerProperty.filter((e=>e.propertyId!==s.landId))].map(((t,r)=>t.propertyId===s.landId?F({className:"mb-8"},[F({className:"flex justify-center"},z({className:"relative font-semibold text-green-500"},"This Property")),a,F({className:"flex my-2"},[z({className:"font-bold text-sm"},[`${"Total Tax Value".toUpperCase()}: `,q({className:"ml-2 text-green-500"},t.price)])])]):F({className:""},[F({className:"flex justify-center"},z({className:"relative font-semibold "+(t.inTerritory?"text-red-500":"text-blue-500")},[""+(t.propertyId===s.landId?"This Territory":`Territory ${t.territory}`),F({className:"absolute has-tooltip -top-2 -right-4 shadow-xl"},[q({className:"tooltip text-sm whitespace-nowrap rounded shadow-lg p-2 bg-green-100 text-red-500 -top-10 right-0"},`Delete property. ID: ${t.propertyId}`),Y({className:"p-1 bg-red-500 rounded-full",onclick:s=>e(C(t.propertyId))},[G({className:"w-2 h-2",src:"/assets/x-white.7d4b2851.svg"})])])])),F({className:""},[K({className:"flex relative",href:`https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=${t.propertyId}`,target:"_blank"},[G({className:"w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-none",src:"/assets/person.7b0dffd1.svg"}),z({className:" flex-grow flex-shrink text-xs sm:text-sm top-0.5 sm:top-0.5 relative  text-blue-500 focus:ring-2 focus:ring-blue-600 visited:text-purple-500 active:text-red-500 underline cursor-pointer "},t.name)])]),F({className:"flex mr-1 sm:mr-3 my-2 "},[G({className:"w-4 h-4 sm:w-5 sm:h-5 flex-none mr-2 sm:mr-3",src:H}),z({className:"flex-grow flex-shrink text-xs sm:text-sm text-gray-500 relative top-0.5 sm:top-0"},s.deed)]),F({className:"flex my-2 relative"},[K({className:"flex ",href:`https://propaccess.trueautomation.com/mapSearch/?cid=71&p=${t.propertyId}`,target:"_blank"},[G({className:"w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-none",src:"/assets/address.a4993978.svg"}),z({className:" flex-grow flex-shrink text-xs sm:text-sm top-0.5 sm:top-0.5 relative  text-blue-500 focus:ring-2 focus:ring-blue-600 visited:text-purple-500 active:text-red-500 underline cursor-pointer "},[t.propertyAddress])]),q({className:"whitespace-pre-wrap"}," "),K({className:""+("empty"===t.propertyAddress?"hidden":"inline-block"),href:`https://www.google.com/maps/search/${t.propertyAddress.replace(/,/,"").replace(/\s/g,"+")}`,target:"_blank"},[G({className:"w-5 h-5 inline-block absolute top-0",src:Z})])]),F({className:"flex my-2"},[G({className:"w-4 h-4 sm:w-5 sm:h-5 flex-none mr-2 sm:mr-3",src:"/assets/property.b83a948a.svg"}),z({className:"flex-grow flex-shrink text-xs sm:text-sm text-green-500 relative top-px sm:top-px"},t.price)])])))}var Q={"EX-XA":"11.111 Public property for housing indigent persons.","EX-XD":"11.181 Improving property for housing with volunteer labor.",CHODO:"11.182 Community Housing Development Organizations.","EX-XF":"11.183 Assisting ambulatory health care centers.","EX-XG":"11.184 Primarily performing charitable functions.","EX-XH":"11.185 Developing model colonia subdivisions.","EX-XI":"11.19 Youth spiritual, mental, and physical development organizations.","EX-XJ":"11.21 Private schools.","EX-XU":"11.23 Miscellaneous Exemptions.","EX-XL":"11.231 Organizations Providing Economic Development Services to Local Community.","EX-XM":"11.25 Marine cargo containers.","EX-XN":"11.252 Motor vehicles leased for personal use.","EX-XO":"11.254 Motor vehicles for income production and personal use.","EX-XP":"11.271 Offshore drilling equipment not in use.","EX-XQ":"11.29 Intracoastal waterway dredge disposal site.","EX-XR":"11.30 Nonprofit water or wastewater corporation.","EX-XS":"11.33 Raw cocoa and green coffee held in Harris County.","EX-XT":"11.34 Limitation on taxes in certain municipalities.",AB:"Abatement.",ABMNO:"Abatement-MNO Only.",CH:"Charitable.",CLT:"Community Land Trust.",DP:"Disability.",DPS:"DISABLED Surviving Spouse.",DVCH:"Disabled Veteran Charity Homestead.",DVCHS:"Disabled Veteran Charity Homestead Surviving Spouse.",DVHS:"Disabled Veteran Homestead.",DVHSS:"Disabled Veteran Homestead Surviving Spouse.",DV1:"Disabled Veterans 10% - 29%.",DV2:"Disabled Veterans 30% - 49%.",DV3:"Disabled Veterans 50% - 69%.",DV4:"Disabled Veterans 70% - 100%.",DV1S:"Disabled Veterans Surviving Spouse 10% - 29%.",DV2S:"Disabled Veterans Surviving Spouse 30% - 49%.",DV3S:"Disabled Veterans Surviving Spouse 50% - 69%.",DV4S:"Disabled Veterans Surviving Spouse 70% - 100%.",DSTR:"Disaster Damage Exemption.",LVE:"Do Not USE Leased Vehicles.",ECO:"Economic Development.",EN:"Energy.",AG:"EOY:AG.",EX:"Exempt.",FRSS:"First Responder Surviving Spouse.",FR:"Freeport.",GIT:"GOODS IN TRANSIT.",EX366:"HB366 Exempt.",HT:"Historical.",HS:"Homestead.",MASSS:"Member Armed Services Surviving Spouse.","EX-XV":"Other Exemptions (including public property, religious organizations, charitable organizations, and other property not reported elsewhere).",PPV:"Personal Property Vehicle.",PC:"Pollution Control.",LIH:"Public property for housing indigent persons.",SO:"Solar.",OTHER:"Exemption not listed.",EMPTY:"No Tax Exemption Listed."};var ee="_bttn_c3k5z_3",te="_bttnButton1_c3k5z_47",se="_bttnButton2_c3k5z_56",ae="_bttnButton3_c3k5z_65";const{div:re,p:oe,img:le,span:ne,button:ie,a:ce}=p(m.h);function me(e){try{return e>9?"w-8 h-8 p-1":"w-6 h-6 p-1"}catch(t){return""}}function pe(e,t,s){return re({className:"flex flex-col mx-2 w-100% max-w-[800px] relative bg-cardBackground my-6 md:my-12 rounded-3xl shadow-xl"},[ce({className:"",href:s.coordinates.lat?`https://www.google.com/maps/search/${s.coordinates.lat},${s.coordinates.lng}`:`https://www.google.com/maps/search/${s.physicalAddress.replace(/\s/g,"+")}+${s.physicalCity}+${s.physicalState}+${s.physicalZip}`,target:"_blank"},[re({className:"w-100 h-200px bg-gray-200 rounded-t-3xl has-tooltip"},[ne({className:"tooltip text-sm whitespace-nowrap rounded shadow-lg p-2 bg-green-100 text-alert -top-12 w-100 text-center"},`Google Maps: ${s.physicalAddress}`),s.thumbnail?le({className:"w-100 h-200px rounded-t-3xl",src:s.thumbnail}):re({className:"text-center pt-24"},"image not available")])]),re({className:"w-100 text-center"},[oe({className:"rounded text-textColor text-sm inline"},s.landId)]),re({className:"px-6 pt-1 pb-6 flex-grow flex flex-col"},[re({className:`flex-shrink flex items-center absolute rounded-full py-4 px-4 shadow-xl ${s.allTrue?"bg-green-500":"hidden"} left-4 -top-6`},[le({className:"w-6 h-6 fill-current "+(s.allTrue?"block":"hidden"),src:"/assets/checkmark.f669f1ce.svg"})]),re({className:(t.key?"inline":"hidden")+" absolute w-100 -top-2 left-0 text-center"},ie({className:"",onclick:t=>{return e((a=s.landId,{type:N,landId:a}));var a}},[le({className:"w-8 h-8 inline ml-28",src:"/assets/plus.70e6730c.svg"})])),re({className:"w-80% has-tooltip"},[ne({className:"tooltip text-sm whitespace-nowrap rounded shadow-lg p-2 bg-green-100 text-alert relative -top-12 left-0 w-100 text-center"},`Delete property. ID: ${s.landId}`),re({className:"absolute -top-0 right-0 shadow-xl"},[ie({className:"relative -top-3 -right-0",onclick:t=>e(C(s.landId))},[le({className:"w-8 h-8",src:J})])])]),re({className:"flex-grow flex flex-col"},[re({className:"has-tooltip my-2"},[ne({className:"tooltip rounded shadow-lg p-2 bg-green-100 text-alert -top-6 left-1/2 w-80% whitespace-pre-line",style:{transform:"translate(-50%, -50%)"}},"Owner Name:\n Last Name,   First Name,   Spouse."),re({className:"flex space-x-4 space-x-reverse relative"},[re({className:"text-textColor opacity-50 text-xs absolute -top-2 left-12 whitespace-nowrap"},"Owner Name"),le({className:"w-6 h-6 relative left-1.5",src:"/assets/person.7b0dffd1.svg"}),oe({className:" flex-grow flex-shrink text-base text-textColor sm:text-xl font-semibold relative bottom-0 left-2"},[s.name,ne({className:`inline-flex items-center justify-center bg-accent text-accentText rounded-full cursor-pointer text-sm relative -top-3.5 ${me(s.ownerProperty.length)}`,onclick:()=>e(T(s.landId))},s.ownerProperty.length)])])]),re({className:"my-3 has-tooltip"},[ne({className:"tooltip rounded shadow-lg p-2 bg-green-100 text-alert -top-6 left-1/2 w-[80%] whitespace-pre-line",style:{transform:"translate(-50%, -50%)"}},""+(s.nameDeedSame?`Deed:\n ${s.name} owns ${parseInt(s.ownership)}% of property.`:"Owner Name and Deed do not match.")),re({className:"flex space-x-4 space-x-reverse relative"},[re({className:"text-textColor opacity-50 text-xs absolute -top-3 left-12 whitespace-nowrap"},"Deed"),le({className:"w-5 h-5 sm:w-8 sm:h-6 flex-none opacity-65",src:H}),oe({className:"flex-grow flex-shrink text-sm sm:text-base opacity-80 "+(s.nameDeedSame?"text-textColor":"text-alert")},""!==s.deed?s.deed:"empty"),le({className:"w-6 h-3 sm:w-8 sm:h-4 relative top-1 ml-auto flex-none",src:s.nameDeedSame?R:B})])]),re({className:"my-3 has-tooltip"},[ne({className:"tooltip rounded shadow-lg p-2 bg-green-100 text-alert -top-6 left-1/2 w-80%",style:{transform:"translate(-50%, -50%)"}},""+(s.addressSame?"Physical address":"Physical Address and Mailing Address do not match")),re({className:"flex space-x-4 space-x-reverse relative"},[re({className:"text-textColor opacity-50 text-xs absolute -top-3 left-12 whitespace-nowrap"},"Physical Address"),le({className:"w-5 h-5 sm:w-8 sm:h-6 flex-none opacity-65",src:"/assets/address.a4993978.svg"}),oe({className:"flex-grow flex-shrink text-sm text-textColor opacity-80 sm:text-base relative"},[ne({className:"mr-2"},s.physicalAddress),ne({className:"text-sm uppercase italic inline-block relative "+("LUFKIN"===s.physicalCity?"text-textColor":"text-alert")},[`${s.physicalCity} ${s.physicalState} ${s.physicalZip}`,ce({className:"",href:s.coordinates.lat?`https://www.google.com/maps/search/${s.coordinates.lat},${s.coordinates.lng}`:`https://www.google.com/maps/search/${s.physicalAddress.replace(/\s/g,"+")}+${s.physicalCity}+${s.physicalState}+${s.physicalZip}`,target:"_blank"},[le({className:"w-5 h-5 inline-block relative bottom-1",src:Z})])])]),le({className:"w-6 h-3 sm:w-8 sm:h-4 relative top-2 flex-none",src:s.addressSame?R:B})])]),re({className:"my-3 has-tooltip"},[ne({className:"tooltip rounded shadow-lg p-2 bg-green-100 text-alert -top-6 left-1/2 w-80% whitespace-pre-line",style:{transform:"translate(-50%, -50%)"}},`Mailing Address for:\n ${s.name}`),re({className:"flex space-x-4 space-x-reverse relative"},[re({className:"text-textColor opacity-50 text-xs absolute -top-3 left-12 whitespace-nowrap"},"Mailing Address"),le({className:"w-5 h-5 sm:w-8 sm:h-6 flex-none",src:"/assets/mail.0580fa5a.svg"}),oe({className:"flex-grow flex-shrink text-sm sm:text-base pr-2 opacity-80 "+(s.addressSame?"text-textColor":"text-alert")},[ne({className:"mr-2"},s.mailingAddress),ne({className:`text-sm uppercase italic inline-block relative ${"LUFKIN"===s.mailingCity?"text-textColor":"text-alert"} ${s.addressSame?"text-textColor":"text-alert"}`},[`${s.mailingCity} ${s.mailingState} ${s.mailingZip}`,ce({className:""+(/P\s?O BOX/.test(s.mailingAddress)?"hidden":"inline-block"),href:`https://www.google.com/maps/search/${s.mailingAddress.replace(/\s/g,"+")}+${s.mailingCity}+${s.mailingState}+${s.mailingZip}`,target:"_blank"},[le({className:"w-5 h-5 inline-block relative bottom-1",src:Z})])])]),le({className:"w-6 h-3 sm:w-8 sm:h-4 relative top-1 flex-none",src:s.addressSame?R:B})])]),re({className:"my-2 has-tooltip flex"},[ne({className:"tooltip whitespace-pre-line rounded shadow-lg p-2 bg-green-100 text-alert -top-6 left-1/2 w-80%",style:{transform:"translate(-50%, -50%)"}},`EXEMPTION CODES:\n${s.exemptions.length>0?s.exemptions.map((e=>`${e}: ${Q[e]}\n`)).join(""):`EMPTY: ${Q.EMPTY}`}`),re({className:"flex space-x-4 space-x-reverse relative"},[re({className:"text-textColor opacity-50 text-xs absolute -top-2.5 left-12 whitespace-nowrap"},"Tax Exemptions"),le({className:"w-5 h-5 sm:w-8 sm:h-6 flex-none opacity-65",src:"/assets/estop.2ae328d0.svg"}),oe({className:"text-sm sm:text-base flex-grow flex-shrink text-accent"},[0===s.exemptions.length?"empty":s.exemptions.map((e=>e+" "))])])]),re({className:"flex-grow flex-shrink "+(s.showOwnerProperty?"hidden":"block")}),re({className:"mt-2 flex justify-center w-100"},[ie({className:`${te} ${ee} w-70%`,onclick:()=>e(T(s.landId))},[s.showOwnerProperty?"Show Less ":"Show More",le({className:"w-3 h-3 relative top-1 -right-1.5 ",src:s.showOwnerProperty?"/assets/arrow-up.bfa751be.svg":"/assets/arrow-down.465f99ce.svg"})])]),re({className:(s.showOwnerProperty?"flex flex-col":"hidden")+" "},[re({className:"flex justify-center w-100 my-2"},[re({className:"border-gray-500 border w-90%"})]),W(e,0,s)]),re({className:"flex-grow flex-shrink "+(s.showOwnerProperty?"block":"hidden")}),re({className:"flex justify-center w-100 mt-4 mb-8"},[re({className:"border-gray-500 border w-90%"})]),re({className:"flex justify-around"},[re({className:"has-tooltip relative w-40%"},[ne({className:"tooltip rounded shadow-lg py-2 sm:p-2 bg-green-100 text-alert text-sm whitespace-nowrap -top-10 right-0 text-center w-100"},"Property Details"),ce({className:"",href:s.urlOwnerDetails,target:"_blank"},ie({className:`${ee} ${se} w-100%`},[le({className:"w-8 h-8",src:"/assets/home-black.455cd91f.svg"})]))]),re({className:"has-tooltip relative w-40%"},[ne({className:"tooltip rounded shadow-lg p-2 bg-green-100 text-alert text-sm whitespace-nowrap -top-10 left-0 text-center w-100"},"View Map"),ce({className:"",href:s.urlLandMap,target:"_blank"},ie({className:`${ae} ${ee} w-100%`},[le({className:"w-8 h-8",src:"/assets/address.a4993978.svg"})]))])])])])])}const{div:de}=p(m.h);const{div:ge,input:he,img:ue,a:xe,span:fe}=p(m.h);function we(e,t){return ge({className:"flex my-2 "},[ge({className:"flex justify-between w-100"},[ge({className:(t.bulkUpload?"block":"hidden")+" has-tooltip relative"},[fe({className:"tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 -bottom-12"},"Save"),xe({className:"",href:URL.createObjectURL(new Blob([JSON.stringify(t)],{type:"text/json"})),target:"_blank",download:`Territory_${t.territory}.json`},ue({className:"w-10 h-10 cursor-pointer",src:"/assets/save.41b05fb9.svg"}))]),ge({className:(t.owners.length>0?"hidden":"block")+" has-tooltip relative"},[fe({className:"tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -right-7"},"Upload File"),he({className:"hidden",id:"fileElem",type:"file",accept:".json",name:"myFile",onchange:t=>{t.srcElement.files[0]&&t.srcElement.files[0].text().then((t=>e(function(e,t=null){return{type:y,data:e,error:t}}(t))))}}),ue({className:"w-10 h-10 cursor-pointer",src:"/assets/upload.943890be.svg",onclick:e=>{document.getElementById("fileElem").click()}})]),ge({className:(t.key?"block":"hidden")+" has-tooltip relative"},[fe({className:"tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -left-4"},"Bulk Upload For Territory Servant"),he({className:"hidden",id:"bulkUploadElem",type:"file",accept:".txt",name:"bulkArray",onchange:t=>{t.srcElement.files[0]&&t.srcElement.files[0].text().then((s=>e(function(e,t="",s=null){return{type:b,data:e,name:t,error:s}}(s,t.srcElement.files[0].name||""))))}}),ue({className:"w-10 h-10 cursor-pointer",src:"/assets/bulk-upload.d23d7411.svg",onclick:e=>{document.getElementById("bulkUploadElem").click()}})]),ge({className:(t.key?"block":"hidden")+" has-tooltip relative"},[fe({className:"tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -left-4"},"Bulk Upload Plus For Territory Servant"),he({className:"hidden",id:"bulkUploadPlusElem",type:"file",accept:".txt",name:"bulkArray",onchange:t=>{t.srcElement.files[0]&&t.srcElement.files[0].text().then((t=>e(function(e,t=null){return{type:S,data:e,error:t}}(t))))}}),ue({className:"w-10 h-10 cursor-pointer",src:"/assets/plus.70e6730c.svg",onclick:e=>{document.getElementById("bulkUploadPlusElem").click()}})]),ge({className:(localStorage.getItem("model")?"block":"hidden")+" has-tooltip relative"},[fe({className:"tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -left-4"},""+(localStorage.getItem("model")?"Local Storage":"Local Storage is Empty")),ue({className:"w-10 h-10 cursor-pointer",src:"/assets/localStorage.6cb61aee.svg",onclick:()=>e(A)})]),ge({className:(t.bulkUpload?"block":"hidden")+" has-tooltip relative"},[fe({className:"tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 left-0"},"Print"),xe({className:"",href:URL.createObjectURL(new Blob((s=t.owners,s.map((e=>`Property ID: ${e.landId}\r\nName: ${e.name}\nProperty Address: ${e.physicalAddress} ${e.physicalCity} ${e.physicalState} ${e.physicalZip}\r\nMailing Address:  ${e.mailingAddress} ${e.mailingCity} ${e.mailingState} ${e.mailingZip}\r\n-----------------------------------------------\r\n\r\n`))),{type:"text/plain"})),target:"_blank",download:`Territory_${t.territory}.txt`},ue({className:"w-10 h-10 cursor-pointer",src:"/assets/printer.e782e0fc.svg"}))]),ge({className:(localStorage.getItem("model")?"block":"hidden")+" has-tooltip relative"},[fe({className:"tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 right-0"},"Start Over"),ue({className:"w-10 h-10 cursor-pointer",src:J,onclick:()=>e(D)})])])]);var s}const{div:ye,p:Ne,h1:be,button:Se,img:ve,span:ke,a:Pe,label:Oe,input:Ie}=p(m.h);function Ee(e,t){return t.error?ye({className:"p-2 mx-2 mb-10 bg-red-500"},[Ne({className:"text-white text-xl relative"},[t.error,Se({className:"p-2 bg-white rounded-full absolute -top-5 -right-5",onclick:()=>e(E)},[ve({className:"w-4 h-4",src:B})])])]):null}function $e(e,t){return t.owners.map((s=>pe(e,t,s)))}const Ae=document.getElementById("app");!function(e,t,s,a){let r=e,o=s((function e(a){const n=t(a,r),i=Array.isArray(n);r=i?n[0]:n;const c=i?n[1]:null;!function(e,t){if(null===t)return;const{request:s,successMsg:a,errorMsg:r}=t;try{const t=s.url;fetch(t,s).then((e=>e.json())).then((t=>e(a(t)))).catch((t=>{t.response?e(r(t.response.data)):e(r(JSON.stringify(t)))}))}catch(o){console.log("Fetch request error:",o)}}(e,c);const p=s(e,r),d=m.diff(o,p);l=m.patch(l,d),o=p}),r),l=c(o);a.appendChild(l)}(d,(function(e,t){switch(e.type){case I:{const e=t.owners,s=!t.sortAtoZ,r=i(n({},t),{owners:j(s,e),sortAtoZ:s});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(r))}catch(a){console.log("Storage Problem: ",a)}return r}case y:{const{data:t}=e,s=V(JSON.parse(t));localStorage.clear();try{localStorage.setItem("model",JSON.stringify(s))}catch(a){console.log("Storage Problem: ",a)}return s}case b:{const{data:r,name:o}=e;localStorage.clear();const l=r.replace(/\n|\r\n|\r/gi,"").split(",").filter((e=>""!==e));var s=[];try{s=l.map((e=>JSON.parse(e)?JSON.parse(e):e))}catch(a){s=l}if(Array.isArray(s)){return[i(n({},d),{key:!1,waiting:!0,territory:o.replace(/\.\w+$/i,""),bulkUpload:!0}),{request:{url:"http://localhost:45500/lots",body:JSON.stringify({landIds:s,territory:o.replace(/\.\w+$/i,"")}),method:"post",headers:{"Content-Type":"application/json;charset=utf-8"}},successMsg:_,errorMsg:U}]}return i(n({},t),{error:"There was a problem with file. Please upload again."})}case S:{const{data:r}=e;localStorage.clear();const o=r.replace(/\n|\r\n|\r/gi,"").split(",").filter((e=>""!==e));s=[];try{s=o.map((e=>JSON.parse(e)?JSON.parse(e):e))}catch(a){s=o}if(Array.isArray(s)){return[i(n({},t),{waiting:!0}),{request:{url:"http://localhost:45500/lots",body:JSON.stringify({landIds:s,territory:t.territory}),method:"post",headers:{"Content-Type":"application/json;charset=utf-8"}},successMsg:L,errorMsg:U}]}return i(n({},t),{error:"There was a problem with Plus file. Please upload again."})}case N:{const{landId:s}=e;localStorage.clear();return[i(n({},t),{waiting:!0}),{request:{url:"http://localhost:45500/lots",body:JSON.stringify({landIds:[s],territory:t.territory}),method:"post",headers:{"Content-Type":"application/json;charset=utf-8"}},successMsg:X,errorMsg:U}]}case g:{const{response:s}=e,r=M(s);r.sort(),t.missingProperty=r;const o=i(n({},t),{waiting:!1,owners:j(t.sortAtoZ,s)});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(o))}catch(a){console.log("Storage Problem: ",a)}return o}case h:{const{response:s}=e,r=[...s.map((e=>e.landId)).reduce(((e,t)=>e.filter((e=>t!==e.landId))),t.owners),...s],o=[...M(s),...t.missingProperty];o.sort(),t.missingProperty=o;const l=i(n({},t),{waiting:!1,owners:j(t.sortAtoZ,r)});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(l))}catch(a){console.log("Storage Problem: ",a)}return l}case u:{const{response:s}=e;console.log("owners",s);const r=[...s.map((e=>e.landId)).reduce(((e,t)=>e.filter((e=>t!==e.landId))),t.owners),...s],o=[...M(s),...t.missingProperty];o.sort(),t.missingProperty=o;const l=i(n({},t),{waiting:!1,owners:j(t.sortAtoZ,r)});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(l))}catch(a){console.log("Storage Problem: ",a)}return l}case x:{const{error:s}=e;return i(n({},t),{waiting:!1,error:s})}case f:return i(n({},t),{error:null});case w:{const s=e.id,r=t.owners.reduce(((e,t)=>{const a=t.ownerProperty.filter((e=>e.propertyId!==s)),r=i(n({},t),{ownerProperty:a});return s!==r.landId?[...e,r]:e}),[]),o=i(n({},t),{owners:r});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(o))}catch(a){console.log("Storage Problem: ",a)}return o}case P:{const e=!t.showMissingProperty,s=i(n({},t),{showMissingProperty:e});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(s))}catch(a){console.log("Storage Problem: ",a)}return s}case O:return localStorage.clear(),d;case v:{const{landId:s}=e,r=t.owners.filter((e=>e.landId!==s)),[o]=t.owners.filter((e=>e.landId===s)),l=t.owners.findIndex((e=>e.landId===s)),c=!o.showOwnerProperty,m=i(n({},o),{showOwnerProperty:c});r.splice(l,0,m);const p=i(n({},t),{owners:r});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(p))}catch(a){console.log("Storage Problem: ",a)}return p}case k:if(localStorage.getItem("model")){return V(JSON.parse(localStorage.getItem("model")))}return t}return t}),(function(e,t){return ye({className:"h-100% px-1 md:px-4 mx-auto"},[ye({className:"bg-gray-300 justify-center items-center w-screen min-h-screen z-10 absolute left-0 top-0 rounded-xl opacity-60 "+(t.waiting?"flex":"hidden")},[(a="blue",de({className:`lds-spinner lds-spinner-${a}`},[de(),de(),de(),de(),de(),de(),de(),de(),de(),de(),de(),de()]))]),we(e,t),ye({className:"mx-2 mb-2 mt-6 sm:mx-0 flex border-b-2 border-black"},[be({className:"text-xl sm:text-2xl md:text-3xl font-bold"},[t.bulkUpload?Ne({className:"text-textColor"},["Lufkin Territory ",ke({className:"relative"},[`${t.territory}`,ke({className:"bg-accent flex justify-center items-center rounded-full text-accentText text-sm absolute "+(s=t.owners.length,s>99?"w-10 h-10 -top-3 -right-10":s>9?"w-8 h-8 -top-2 -right-8":"w-7 h-7 -top-1 -right-6")},`${t.owners.length}`)])]):"Lufkin Address Viewer"]),ye({className:(t.owners.length>0?"block":"hidden")+" ml-auto"},[Oe({className:"flex items-center cursor-pointer",for:"sortAtoZ"},[ye({className:"relative"},[Ie({className:"sr-only",type:"checkbox",id:"sortAtoZ",checked:!(null==t?void 0:t.sortAtoZ)||!1,onclick:()=>e($)}),ye({className:"block bg-gray-600 w-14 h-8 rounded-full"}),ye({className:"dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"})]),ye({className:"hidden sm:inline ml-3 text-gray-700 font-medium"},["Sort by number"])])])]),Ee(e,t),ye({className:(t.showMissingProperty?"block":"hidden")+" mb-10"},[t.missingProperty.map((e=>Pe({className:"",href:`https://propaccess.trueautomation.com/mapSearch/?cid=71&p=${e}`,target:"_blank"},[Ne({className:" flex-grow flex-shrink text-xs sm:text-sm top-0.5 sm:top-0.5 relative  text-blue-500 focus:ring-2 focus:ring-blue-600 visited:text-purple-500 active:text-red-500 underline cursor-pointer "},e)])))]),ye({className:"grid grid-cols-1 xl:grid-cols-2 xl:gap-6 2xl:gap-12 justify-items-center"},[$e(e,t)])]);var s,a}),Ae);
