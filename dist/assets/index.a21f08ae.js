var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,s,r)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,n=(e,t)=>{for(var s in t||(t={}))a.call(t,s)&&l(e,s,t[s]);if(r)for(var s of r(t))o.call(t,s)&&l(e,s,t[s]);return e},i=(e,r)=>t(e,s(r));import{c,v as p,h as m}from"./vendor.4cd4fbdb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const d={key:!1,sortAtoZ:!0,waiting:!1,territory:"",showOwnerProperty:!0,error:null,bulkUpload:!1,missingProperty:[],showMissingProperty:!1,owners:[]},g="HTTP_SUCCESS_ITEM",h="HTTP_SUCCESS_BULK_UPLOAD_PLUS",u="HTTP_SUCCESS_SINGLE_UPLOAD",x="HTTP_ERROR",y="CLEAR_ERROR",f="DELETE_LOT",w="UPLOAD",N="SINGLE_UPLOAD",b="BULK_UPLOAD",S="BULK_UPLOAD_PLUS",v="SHOW_OWNER_PROPERTY",k="LOCAL_STORAGE",P="SHOW_MISSING_PROPERTY",O="TRASH",I="SORT_A_Z";const E={type:y},$={type:I},A={type:k},D={type:O};function T(e){return{type:v,landId:e}}function C(e){return{type:f,id:e}}const _=e=>({type:g,response:e}),L=e=>({type:h,response:e}),X=e=>({type:u,response:e}),U=e=>({type:x,error:e});function M(e){let t=[];for(const s of e)t.push(...s.ownerProperty.filter((e=>"empty"===e.territory)));return t.map((e=>e.propertyId))}function V(e){let t=e;return e.hasOwnProperty("sortAtoZ")||(t=i(n({},e),{sortAtoZ:!0})),t}function j(e,t){return e?(t.sort(((e,t)=>(e=e.name)<(t=t.name)?-1:t<e?1:0)),t):(t.sort(((e,t)=>(e=parseInt(e.landId))<(t=parseInt(t.landId))?-1:t<e?1:0)),t)}var H="/territory-app/assets/person.7b0dffd1.svg",R="/territory-app/assets/deed.8f50fb76.svg",B="/territory-app/assets/checkmark-green.d94d5722.svg",J="/territory-app/assets/address.a4993978.svg",Z="/territory-app/assets/x.ff74cd51.svg",F="/territory-app/assets/trash.ac835838.svg",z="/territory-app/assets/google-maps.81b0a225.svg";const{div:G,p:q,img:Y,span:K,button:W,a:Q}=m(p.h);function ee(e,t,s){const r=G({className:"my-2"},[q({className:"font-bold text-sm"},"Improvements".toUpperCase()),s.improvements[0].improvement?s.improvements.map((e=>G({className:"flex text-xs mx-2"},[K({className:"flex-shrink"},`${e.improvement} `),K({className:"flex-1 whitespace-nowrap text-center"},e.improvementDetails),K({className:""+(e.sqft?"flex-1":"hidden")},e.sqft),K({className:"flex-shrink text-right"},`${e.value}`)]))):q({className:"mx-2 text-xs"},"No improvements to land listed."),q({className:"font-bold text-sm mt-2"},"Land".toUpperCase()),s.lands[0].landType?s.lands.map((e=>G({className:"flex text-xs mx-2"},[K({className:"flex-1"},e.landType),K({className:"flex-1 text-center"},`acres: ${parseFloat(e.acres).toString()}`),K({className:" flex-1 text-right whitespace-nowrap"},`${e.marketValue}`)]))):q({className:"mx-2 text-xs"},"No land listed.")]);if(1===s.ownerProperty.length)return G({className:""},[r,G({className:"flex my-2"},[q({className:"font-bold text-sm"},[`${"Total Tax Value".toUpperCase()}: `,K({className:"ml-2 text-green-500"},s.ownerProperty[0].price)])])]);return[...s.ownerProperty.filter((e=>e.propertyId===s.landId)),...s.ownerProperty.filter((e=>e.propertyId!==s.landId))].map(((t,a)=>t.propertyId===s.landId?G({className:"mb-8"},[G({className:"flex justify-center"},q({className:"relative font-semibold text-green-500"},"This Property")),r,G({className:"flex my-2"},[q({className:"font-bold text-sm"},[`${"Total Tax Value".toUpperCase()}: `,K({className:"ml-2 text-green-500"},t.price)])])]):G({className:""},[G({className:"flex justify-center"},q({className:"relative font-semibold "+(t.inTerritory?"text-red-500":"text-blue-500")},[""+(t.propertyId===s.landId?"This Territory":`Territory ${t.territory}`),G({className:"absolute has-tooltip -top-2 -right-4 shadow-xl"},[K({className:"tooltip text-sm whitespace-nowrap rounded shadow-lg p-2 bg-green-100 text-red-500 -top-10 right-0"},`Delete property. ID: ${t.propertyId}`),W({className:"p-1 bg-red-500 rounded-full",onclick:s=>e(C(t.propertyId))},[Y({className:"w-2 h-2",src:"/territory-app/assets/x-white.7d4b2851.svg"})])])])),G({className:""},[Q({className:"flex relative",href:`https://propaccess.trueautomation.com/clientdb/Property.aspx?cid=71&prop_id=${t.propertyId}`,target:"_blank"},[Y({className:"w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-none",src:H}),q({className:" flex-grow flex-shrink text-xs sm:text-sm top-0.5 sm:top-0.5 relative  text-blue-500 focus:ring-2 focus:ring-blue-600 visited:text-purple-500 active:text-red-500 underline cursor-pointer "},t.name)])]),G({className:"flex mr-1 sm:mr-3 my-2 "},[Y({className:"w-4 h-4 sm:w-5 sm:h-5 flex-none mr-2 sm:mr-3",src:R}),q({className:"flex-grow flex-shrink text-xs sm:text-sm text-gray-500 relative top-0.5 sm:top-0"},s.deed)]),G({className:"flex my-2 relative"},[Q({className:"flex ",href:`https://propaccess.trueautomation.com/mapSearch/?cid=71&p=${t.propertyId}`,target:"_blank"},[Y({className:"w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-none",src:J}),q({className:" flex-grow flex-shrink text-xs sm:text-sm top-0.5 sm:top-0.5 relative  text-blue-500 focus:ring-2 focus:ring-blue-600 visited:text-purple-500 active:text-red-500 underline cursor-pointer "},[t.propertyAddress])]),K({className:"whitespace-pre-wrap"}," "),Q({className:""+("empty"===t.propertyAddress?"hidden":"inline-block"),href:`https://www.google.com/maps/search/${t.propertyAddress.replace(/,/,"").replace(/\s/g,"+")}`,target:"_blank"},[Y({className:"w-5 h-5 inline-block absolute top-0",src:z})])]),G({className:"flex my-2"},[Y({className:"w-4 h-4 sm:w-5 sm:h-5 flex-none mr-2 sm:mr-3",src:"/territory-app/assets/property.b83a948a.svg"}),q({className:"flex-grow flex-shrink text-xs sm:text-sm text-green-500 relative top-px sm:top-px"},t.price)])])))}var te={"EX-XA":"11.111 Public property for housing indigent persons.","EX-XD":"11.181 Improving property for housing with volunteer labor.",CHODO:"11.182 Community Housing Development Organizations.","EX-XF":"11.183 Assisting ambulatory health care centers.","EX-XG":"11.184 Primarily performing charitable functions.","EX-XH":"11.185 Developing model colonia subdivisions.","EX-XI":"11.19 Youth spiritual, mental, and physical development organizations.","EX-XJ":"11.21 Private schools.","EX-XU":"11.23 Miscellaneous Exemptions.","EX-XL":"11.231 Organizations Providing Economic Development Services to Local Community.","EX-XM":"11.25 Marine cargo containers.","EX-XN":"11.252 Motor vehicles leased for personal use.","EX-XO":"11.254 Motor vehicles for income production and personal use.","EX-XP":"11.271 Offshore drilling equipment not in use.","EX-XQ":"11.29 Intracoastal waterway dredge disposal site.","EX-XR":"11.30 Nonprofit water or wastewater corporation.","EX-XS":"11.33 Raw cocoa and green coffee held in Harris County.","EX-XT":"11.34 Limitation on taxes in certain municipalities.",AB:"Abatement.",ABMNO:"Abatement-MNO Only.",CH:"Charitable.",CLT:"Community Land Trust.",DP:"Disability.",DPS:"DISABLED Surviving Spouse.",DVCH:"Disabled Veteran Charity Homestead.",DVCHS:"Disabled Veteran Charity Homestead Surviving Spouse.",DVHS:"Disabled Veteran Homestead.",DVHSS:"Disabled Veteran Homestead Surviving Spouse.",DV1:"Disabled Veterans 10% - 29%.",DV2:"Disabled Veterans 30% - 49%.",DV3:"Disabled Veterans 50% - 69%.",DV4:"Disabled Veterans 70% - 100%.",DV1S:"Disabled Veterans Surviving Spouse 10% - 29%.",DV2S:"Disabled Veterans Surviving Spouse 30% - 49%.",DV3S:"Disabled Veterans Surviving Spouse 50% - 69%.",DV4S:"Disabled Veterans Surviving Spouse 70% - 100%.",DSTR:"Disaster Damage Exemption.",LVE:"Do Not USE Leased Vehicles.",ECO:"Economic Development.",EN:"Energy.",AG:"EOY:AG.",EX:"Exempt.",FRSS:"First Responder Surviving Spouse.",FR:"Freeport.",GIT:"GOODS IN TRANSIT.",EX366:"HB366 Exempt.",HT:"Historical.",HS:"Homestead.",MASSS:"Member Armed Services Surviving Spouse.","EX-XV":"Other Exemptions (including public property, religious organizations, charitable organizations, and other property not reported elsewhere).",PPV:"Personal Property Vehicle.",PC:"Pollution Control.",LIH:"Public property for housing indigent persons.",SO:"Solar.",OTHER:"Exemption not listed.",EMPTY:"No Tax Exemption Listed."};var se="_bttn_c3k5z_3",re="_bttnButton1_c3k5z_47",ae="_bttnButton2_c3k5z_56",oe="_bttnButton3_c3k5z_65";const{div:le,p:ne,img:ie,span:ce,button:pe,a:me}=m(p.h);function de(e){try{return e>9?"w-8 h-8 p-1":"w-6 h-6 p-1"}catch(t){return""}}function ge(e,t,s){return le({className:"flex flex-col mx-2 w-100% max-w-[800px] relative bg-cardBackground my-6 md:my-12 rounded-3xl shadow-xl"},[me({className:"",href:s.coordinates.lat?`https://www.google.com/maps/search/${s.coordinates.lat},${s.coordinates.lng}`:`https://www.google.com/maps/search/${s.physicalAddress.replace(/\s/g,"+")}+${s.physicalCity}+${s.physicalState}+${s.physicalZip}`,target:"_blank"},[le({className:"w-100 h-200px md:h-[400px] bg-gray-200 rounded-t-3xl has-tooltip"},[ce({className:"tooltip text-sm whitespace-nowrap rounded shadow-lg p-2 bg-green-100 text-alert -top-6 left-1/2 w-70% text-center",style:{transform:"translate(-50%, -50%)"}},`Google Maps: ${s.physicalAddress}`),s.thumbnail?ie({className:"w-100 h-200px md:h-[400px] rounded-t-3xl",src:s.thumbnail}):le({className:"text-center pt-24"},"image not available")])]),le({className:"w-100 text-center"},[ne({className:"rounded text-textColor text-sm inline"},s.landId)]),le({className:"px-6 pt-1 pb-6 flex-grow flex flex-col"},[le({className:`flex-shrink flex items-center absolute rounded-full py-4 px-4 shadow-xl ${s.allTrue?"bg-green-500":"hidden"} left-4 -top-6`},[ie({className:"w-6 h-6 fill-current "+(s.allTrue?"block":"hidden"),src:"/territory-app/assets/checkmark.f669f1ce.svg"})]),le({className:(t.key?"inline":"hidden")+" absolute w-100 -top-2 left-0 text-center"},pe({className:"",onclick:t=>{return e((r=s.landId,{type:N,landId:r}));var r}},[ie({className:"w-8 h-8 inline ml-28",src:"/territory-app/assets/plus.70e6730c.svg"})])),le({className:"has-tooltip"},[ce({className:"tooltip text-sm whitespace-nowrap rounded shadow-lg p-2 bg-green-100 text-alert relative -top-6 left-1/2 w-70% text-center",style:{transform:"translate(-50%, -50%)"}},`Delete property. ID: ${s.landId}`),le({className:"absolute -top-0 right-0 shadow-xl"},[pe({className:"relative -top-3 -right-0",onclick:t=>e(C(s.landId))},[ie({className:"w-8 h-8",src:F})])])]),le({className:"flex-grow flex flex-col"},[le({className:"has-tooltip my-2"},[ce({className:"tooltip rounded shadow-lg p-2 bg-green-100 text-alert -top-6 left-1/2 w-80% whitespace-pre-line",style:{transform:"translate(-50%, -50%)"}},"Owner Name:\n Last Name,   First Name,   Spouse."),le({className:"flex space-x-4 space-x-reverse relative"},[le({className:"text-textColor opacity-50 text-xs absolute -top-2 left-12 whitespace-nowrap"},"Owner Name"),ie({className:"w-6 h-6 relative left-1.5",src:H}),ne({className:" flex-grow flex-shrink text-base text-textColor sm:text-xl font-semibold relative bottom-0 left-2"},[s.name,ce({className:`inline-flex items-center justify-center bg-accent text-accentText rounded-full cursor-pointer text-sm relative -top-3.5 ${de(s.ownerProperty.length)}`,onclick:()=>e(T(s.landId))},s.ownerProperty.length)])])]),le({className:"my-3 has-tooltip"},[ce({className:"tooltip rounded shadow-lg p-2 bg-green-100 text-alert -top-6 left-1/2 w-[80%] whitespace-pre-line",style:{transform:"translate(-50%, -50%)"}},""+(s.nameDeedSame?`Deed:\n ${s.name} owns ${parseInt(s.ownership)}% of property.`:"Owner Name and Deed do not match.")),le({className:"flex space-x-4 space-x-reverse relative"},[le({className:"text-textColor opacity-50 text-xs absolute -top-3 left-12 whitespace-nowrap"},"Deed"),ie({className:"w-5 h-5 sm:w-8 sm:h-6 flex-none opacity-65",src:R}),ne({className:"flex-grow flex-shrink text-sm sm:text-base opacity-80 "+(s.nameDeedSame?"text-textColor":"text-alert")},""!==s.deed?s.deed:"empty"),ie({className:"w-6 h-3 sm:w-8 sm:h-4 relative top-1 ml-auto flex-none",src:s.nameDeedSame?B:Z})])]),le({className:"my-3 has-tooltip"},[ce({className:"tooltip rounded shadow-lg p-2 bg-green-100 text-alert -top-6 left-1/2 w-80%",style:{transform:"translate(-50%, -50%)"}},""+(s.addressSame?"Physical address":"Physical Address and Mailing Address do not match")),le({className:"flex space-x-4 space-x-reverse relative"},[le({className:"text-textColor opacity-50 text-xs absolute -top-3 left-12 whitespace-nowrap"},"Physical Address"),ie({className:"w-5 h-5 sm:w-8 sm:h-6 flex-none opacity-65",src:J}),ne({className:"flex-grow flex-shrink text-sm text-textColor opacity-80 sm:text-base relative"},[ce({className:"mr-2"},s.physicalAddress),ce({className:"text-sm uppercase italic inline-block relative "+("LUFKIN"===s.physicalCity?"text-textColor":"text-alert")},[`${s.physicalCity} ${s.physicalState} ${s.physicalZip}`,me({className:"",href:s.coordinates.lat?`https://www.google.com/maps/search/${s.coordinates.lat},${s.coordinates.lng}`:`https://www.google.com/maps/search/${s.physicalAddress.replace(/\s/g,"+")}+${s.physicalCity}+${s.physicalState}+${s.physicalZip}`,target:"_blank"},["empty"===s.physicalAddress&&""===s.coordinates.lat?"":ie({className:"w-5 h-5 inline-block relative bottom-1",src:z})])])]),ie({className:"w-6 h-3 sm:w-8 sm:h-4 relative top-2 flex-none",src:s.addressSame?B:Z})])]),le({className:"my-3 has-tooltip"},[ce({className:"tooltip rounded shadow-lg p-2 bg-green-100 text-alert -top-6 left-1/2 w-80% whitespace-pre-line",style:{transform:"translate(-50%, -50%)"}},`Mailing Address for:\n ${s.name}`),le({className:"flex space-x-4 space-x-reverse relative"},[le({className:"text-textColor opacity-50 text-xs absolute -top-3 left-12 whitespace-nowrap"},"Mailing Address"),ie({className:"w-5 h-5 sm:w-8 sm:h-6 flex-none",src:"/territory-app/assets/mail.0580fa5a.svg"}),ne({className:"flex-grow flex-shrink text-sm sm:text-base pr-2 opacity-80 "+(s.addressSame?"text-textColor":"text-alert")},[ce({className:"mr-2"},s.mailingAddress),ce({className:`text-sm uppercase italic inline-block relative ${"LUFKIN"===s.mailingCity?"text-textColor":"text-alert"} ${s.addressSame?"text-textColor":"text-alert"}`},[`${s.mailingCity} ${s.mailingState} ${s.mailingZip}`,me({className:""+(/P\s?O BOX/.test(s.mailingAddress)?"hidden":"inline-block"),href:`https://www.google.com/maps/search/${s.mailingAddress.replace(/\s/g,"+")}+${s.mailingCity}+${s.mailingState}+${s.mailingZip}`,target:"_blank"},[ie({className:"w-5 h-5 inline-block relative bottom-1",src:z})])])]),ie({className:"w-6 h-3 sm:w-8 sm:h-4 relative top-1 flex-none",src:s.addressSame?B:Z})])]),le({className:"my-2 has-tooltip flex"},[ce({className:"tooltip whitespace-pre-line rounded shadow-lg p-2 bg-green-100 text-alert -top-6 left-1/2 w-80%",style:{transform:"translate(-50%, -50%)"}},`EXEMPTION CODES:\n${s.exemptions.length>0?s.exemptions.map((e=>`${e}: ${te[e]}\n`)).join(""):`EMPTY: ${te.EMPTY}`}`),le({className:"flex space-x-4 space-x-reverse relative"},[le({className:"text-textColor opacity-50 text-xs absolute -top-2.5 left-12 whitespace-nowrap"},"Tax Exemptions"),ie({className:"w-5 h-5 sm:w-8 sm:h-6 flex-none opacity-65",src:"/territory-app/assets/estop.2ae328d0.svg"}),ne({className:"text-sm sm:text-base flex-grow flex-shrink text-accent"},[0===s.exemptions.length?"empty":s.exemptions.map((e=>e+" "))])])]),le({className:"flex-grow flex-shrink "+(s.showOwnerProperty?"hidden":"block")}),le({className:"mt-2 flex justify-center w-100"},[pe({className:`${re} ${se} w-70%`,onclick:()=>e(T(s.landId))},[s.showOwnerProperty?"Show Less ":"Show More",ie({className:"w-3 h-3 relative top-1 -right-1.5 ",src:s.showOwnerProperty?"/territory-app/assets/arrow-up.bfa751be.svg":"/territory-app/assets/arrow-down.465f99ce.svg"})])]),le({className:(s.showOwnerProperty?"flex flex-col":"hidden")+" "},[le({className:"flex justify-center w-100 my-2"},[le({className:"border-gray-500 border w-90%"})]),ee(e,0,s)]),le({className:"flex-grow flex-shrink "+(s.showOwnerProperty?"block":"hidden")}),le({className:"flex justify-center w-100 mt-4 mb-8"},[le({className:"border-gray-500 border w-90%"})]),le({className:"flex justify-around"},[le({className:"has-tooltip relative w-40%"},[ce({className:"tooltip rounded shadow-lg py-2 sm:p-2 bg-green-100 text-alert text-sm whitespace-nowrap -top-10 right-0 text-center w-100"},"Property Details"),me({className:"",href:s.urlOwnerDetails,target:"_blank"},pe({className:`${se} ${ae} w-100%`},[ie({className:"w-8 h-8",src:"/territory-app/assets/home-black.455cd91f.svg"})]))]),le({className:"has-tooltip relative w-40%"},[ce({className:"tooltip rounded shadow-lg p-2 bg-green-100 text-alert text-sm whitespace-nowrap -top-10 left-0 text-center w-100"},"View Map"),me({className:"",href:s.urlLandMap,target:"_blank"},pe({className:`${oe} ${se} w-100%`},[ie({className:"w-8 h-8",src:"/territory-app/assets/address.a4993978.svg"})]))])])])])])}const{div:he}=m(p.h);const{div:ue,input:xe,img:ye,a:fe,span:we}=m(p.h);function Ne(e,t){return ue({className:"flex my-2 "},[ue({className:"flex justify-between w-100"},[ue({className:(t.bulkUpload?"block":"hidden")+" has-tooltip relative"},[we({className:"tooltip rounded shadow-lg p-2 bg-green-100 text-red-500 -bottom-12"},"Save"),fe({className:"",href:URL.createObjectURL(new Blob([JSON.stringify(t)],{type:"text/json"})),target:"_blank",download:`Territory_${t.territory}.json`},ye({className:"w-10 h-10 cursor-pointer",src:"/territory-app/assets/save.41b05fb9.svg"}))]),ue({className:(t.owners.length>0?"hidden":"block")+" has-tooltip relative"},[we({className:"tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -right-7"},"Upload File"),xe({className:"hidden",id:"fileElem",type:"file",accept:".json",name:"myFile",onchange:t=>{t.srcElement.files[0]&&t.srcElement.files[0].text().then((t=>e(function(e,t=null){return{type:w,data:e,error:t}}(t))))}}),ye({className:"w-10 h-10 cursor-pointer",src:"/territory-app/assets/upload.943890be.svg",onclick:e=>{document.getElementById("fileElem").click()}})]),ue({className:(t.key?"block":"hidden")+" has-tooltip relative"},[we({className:"tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -left-4"},"Bulk Upload For Territory Servant"),xe({className:"hidden",id:"bulkUploadElem",type:"file",accept:".txt",name:"bulkArray",onchange:t=>{t.srcElement.files[0]&&t.srcElement.files[0].text().then((s=>e(function(e,t="",s=null){return{type:b,data:e,name:t,error:s}}(s,t.srcElement.files[0].name||""))))}}),ye({className:"w-10 h-10 cursor-pointer",src:"/territory-app/assets/bulk-upload.d23d7411.svg",onclick:e=>{document.getElementById("bulkUploadElem").click()}})]),ue({className:(t.key?"block":"hidden")+" has-tooltip relative"},[we({className:"tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -left-4"},"Bulk Upload Plus For Territory Servant"),xe({className:"hidden",id:"bulkUploadPlusElem",type:"file",accept:".txt",name:"bulkArray",onchange:t=>{t.srcElement.files[0]&&t.srcElement.files[0].text().then((t=>e(function(e,t=null){return{type:S,data:e,error:t}}(t))))}}),ye({className:"w-10 h-10 cursor-pointer",src:"/territory-app/assets/plus.70e6730c.svg",onclick:e=>{document.getElementById("bulkUploadPlusElem").click()}})]),ue({className:(localStorage.getItem("model")?"block":"hidden")+" has-tooltip relative"},[we({className:"tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 -left-4"},""+(localStorage.getItem("model")?"Local Storage":"Local Storage is Empty")),ye({className:"w-10 h-10 cursor-pointer",src:"/territory-app/assets/localStorage.6cb61aee.svg",onclick:()=>e(A)})]),ue({className:(t.bulkUpload?"block":"hidden")+" has-tooltip relative"},[we({className:"tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 left-0"},"Print"),fe({className:"",href:URL.createObjectURL(new Blob((s=t.owners,s.map((e=>`Property ID: ${e.landId}\r\nName: ${e.name}\nProperty Address: ${e.physicalAddress} ${e.physicalCity} ${e.physicalState} ${e.physicalZip}\r\nMailing Address:  ${e.mailingAddress} ${e.mailingCity} ${e.mailingState} ${e.mailingZip}\r\n-----------------------------------------------\r\n\r\n`))),{type:"text/plain"})),target:"_blank",download:`Territory_${t.territory}.txt`},ye({className:"w-10 h-10 cursor-pointer",src:"/territory-app/assets/printer.e782e0fc.svg"}))]),ue({className:(localStorage.getItem("model")?"block":"hidden")+" has-tooltip relative"},[we({className:"tooltip rounded whitespace-nowrap shadow-lg p-2 bg-green-100 text-red-500 -bottom-12 right-0"},"Start Over"),ye({className:"w-10 h-10 cursor-pointer",src:F,onclick:()=>e(D)})])])]);var s}const{div:be,p:Se,h1:ve,button:ke,img:Pe,span:Oe,a:Ie,label:Ee,input:$e}=m(p.h);function Ae(e,t){return t.error?be({className:"p-2 mx-2 mb-10 bg-red-500"},[Se({className:"text-white text-xl relative"},[t.error,ke({className:"p-2 bg-white rounded-full absolute -top-5 -right-5",onclick:()=>e(E)},[Pe({className:"w-4 h-4",src:Z})])])]):null}function De(e,t){return t.owners.map((s=>ge(e,t,s)))}const Te=document.getElementById("app");!function(e,t,s,r){let a=e,o=s((function e(r){const n=t(r,a),i=Array.isArray(n);a=i?n[0]:n;const c=i?n[1]:null;!function(e,t){if(null===t)return;const{request:s,successMsg:r,errorMsg:a}=t;try{const t=s.url;fetch(t,s).then((e=>e.json())).then((t=>e(r(t)))).catch((t=>{t.response?e(a(t.response.data)):e(a(JSON.stringify(t)))}))}catch(o){console.log("Fetch request error:",o)}}(e,c);const m=s(e,a),d=p.diff(o,m);l=p.patch(l,d),o=m}),a),l=c(o);r.appendChild(l)}(d,(function(e,t){switch(e.type){case I:{const e=t.owners,s=!t.sortAtoZ,a=i(n({},t),{owners:j(s,e),sortAtoZ:s});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(a))}catch(r){console.log("Storage Problem: ",r)}return a}case w:{const{data:t}=e,s=V(JSON.parse(t));localStorage.clear();try{localStorage.setItem("model",JSON.stringify(s))}catch(r){console.log("Storage Problem: ",r)}return s}case b:{const{data:a,name:o}=e;localStorage.clear();const l=a.replace(/\n|\r\n|\r/gi,"").split(",").filter((e=>""!==e));var s=[];try{s=l.map((e=>JSON.parse(e)?JSON.parse(e):e))}catch(r){s=l}if(Array.isArray(s)){return[i(n({},d),{key:!1,waiting:!0,territory:o.replace(/\.\w+$/i,""),bulkUpload:!0}),{request:{url:"http://localhost:45500/lots",body:JSON.stringify({landIds:s,territory:o.replace(/\.\w+$/i,"")}),method:"post",headers:{"Content-Type":"application/json;charset=utf-8"}},successMsg:_,errorMsg:U}]}return i(n({},t),{error:"There was a problem with file. Please upload again."})}case S:{const{data:a}=e;localStorage.clear();const o=a.replace(/\n|\r\n|\r/gi,"").split(",").filter((e=>""!==e));s=[];try{s=o.map((e=>JSON.parse(e)?JSON.parse(e):e))}catch(r){s=o}if(Array.isArray(s)){return[i(n({},t),{waiting:!0}),{request:{url:"http://localhost:45500/lots",body:JSON.stringify({landIds:s,territory:t.territory}),method:"post",headers:{"Content-Type":"application/json;charset=utf-8"}},successMsg:L,errorMsg:U}]}return i(n({},t),{error:"There was a problem with Plus file. Please upload again."})}case N:{const{landId:s}=e;localStorage.clear();return[i(n({},t),{waiting:!0}),{request:{url:"http://localhost:45500/lots",body:JSON.stringify({landIds:[s],territory:t.territory}),method:"post",headers:{"Content-Type":"application/json;charset=utf-8"}},successMsg:X,errorMsg:U}]}case g:{const{response:s}=e,a=M(s);a.sort(),t.missingProperty=a;const o=i(n({},t),{waiting:!1,owners:j(t.sortAtoZ,s)});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(o))}catch(r){console.log("Storage Problem: ",r)}return o}case h:{const{response:s}=e,a=[...s.map((e=>e.landId)).reduce(((e,t)=>e.filter((e=>t!==e.landId))),t.owners),...s],o=[...M(s),...t.missingProperty];o.sort(),t.missingProperty=o;const l=i(n({},t),{waiting:!1,owners:j(t.sortAtoZ,a)});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(l))}catch(r){console.log("Storage Problem: ",r)}return l}case u:{const{response:s}=e;console.log("owners",s);const a=[...s.map((e=>e.landId)).reduce(((e,t)=>e.filter((e=>t!==e.landId))),t.owners),...s],o=[...M(s),...t.missingProperty];o.sort(),t.missingProperty=o;const l=i(n({},t),{waiting:!1,owners:j(t.sortAtoZ,a)});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(l))}catch(r){console.log("Storage Problem: ",r)}return l}case x:{const{error:s}=e;return i(n({},t),{waiting:!1,error:s})}case y:return i(n({},t),{error:null});case f:{const s=e.id,a=t.owners.reduce(((e,t)=>{const r=t.ownerProperty.filter((e=>e.propertyId!==s)),a=i(n({},t),{ownerProperty:r});return s!==a.landId?[...e,a]:e}),[]),o=i(n({},t),{owners:a});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(o))}catch(r){console.log("Storage Problem: ",r)}return o}case P:{const e=!t.showMissingProperty,s=i(n({},t),{showMissingProperty:e});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(s))}catch(r){console.log("Storage Problem: ",r)}return s}case O:return localStorage.clear(),d;case v:{const{landId:s}=e,a=t.owners.filter((e=>e.landId!==s)),[o]=t.owners.filter((e=>e.landId===s)),l=t.owners.findIndex((e=>e.landId===s)),c=!o.showOwnerProperty,p=i(n({},o),{showOwnerProperty:c});a.splice(l,0,p);const m=i(n({},t),{owners:a});localStorage.clear();try{localStorage.setItem("model",JSON.stringify(m))}catch(r){console.log("Storage Problem: ",r)}return m}case k:if(localStorage.getItem("model")){return V(JSON.parse(localStorage.getItem("model")))}return t}return t}),(function(e,t){return be({className:"h-100% px-1 md:px-4 mx-auto"},[be({className:"bg-gray-300 justify-center items-center w-screen min-h-screen z-10 absolute left-0 top-0 rounded-xl opacity-60 "+(t.waiting?"flex":"hidden")},[(r="blue",he({className:`lds-spinner lds-spinner-${r}`},[he(),he(),he(),he(),he(),he(),he(),he(),he(),he(),he(),he()]))]),Ne(e,t),be({className:"mx-2 mb-2 mt-6 sm:mx-0 flex border-b-2 border-black"},[ve({className:"text-xl sm:text-2xl md:text-3xl font-bold"},[t.bulkUpload?Se({className:"text-textColor"},["Lufkin Territory ",Oe({className:"relative"},[`${t.territory}`,Oe({className:"bg-accent flex justify-center items-center rounded-full text-accentText text-sm absolute "+(s=t.owners.length,s>99?"w-10 h-10 -top-3 -right-10":s>9?"w-8 h-8 -top-2 -right-8":"w-7 h-7 -top-1 -right-6")},`${t.owners.length}`)])]):"Lufkin Address Viewer"]),be({className:(t.owners.length>0?"block":"hidden")+" ml-auto"},[Ee({className:"flex items-center cursor-pointer",for:"sortAtoZ"},[be({className:"relative"},[$e({className:"sr-only",type:"checkbox",id:"sortAtoZ",checked:!(null==t?void 0:t.sortAtoZ)||!1,onclick:()=>e($)}),be({className:"block bg-gray-600 w-14 h-8 rounded-full"}),be({className:"dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"})]),be({className:"hidden sm:inline ml-3 text-gray-700 font-medium"},["Sort by number"])])])]),Ae(e,t),be({className:(t.showMissingProperty?"block":"hidden")+" mb-10"},[t.missingProperty.map((e=>Ie({className:"",href:`https://propaccess.trueautomation.com/mapSearch/?cid=71&p=${e}`,target:"_blank"},[Se({className:" flex-grow flex-shrink text-xs sm:text-sm top-0.5 sm:top-0.5 relative  text-blue-500 focus:ring-2 focus:ring-blue-600 visited:text-purple-500 active:text-red-500 underline cursor-pointer "},e)])))]),be({className:"grid grid-cols-1 xl:grid-cols-2 xl:gap-6 2xl:gap-12 justify-items-center"},[De(e,t)])]);var s,r}),Te);