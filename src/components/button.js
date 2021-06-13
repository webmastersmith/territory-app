// bottom two buttons
export const btnCSS = (color = "bg-green-500", hoverColor = 'bg-green-600', text = 'text-white', size = 'text-base') => `border-0 ${size} py-2 px-4 text-shadow-btn ${text} font-semibold rounded-btn shadow-btn bg-gradient-btn ${color} hover:${hoverColor} uppercase active:shadow-btn-inner`
 
// show more button
export const btnShowMore = (color = "bg-green-500", hoverColor = 'bg-green-600', text = 'text-white', size = 'text-sm') => `border-0 ${size} py-2 px-4 ${text} font-semibold rounded-btn shadow-btn bg-gradient-btn ${color} hover:${hoverColor} active:shadow-btn-inner`

// export const btn = `inline-flex items-center px-4 py-2 mt-2 font-semibold tracking-tighter text-black transition duration-500 ease-in-out transform bg-transparent border border-button1 rounded-lg text-md md:mt-0 hover:text-black hover:bg-gray-200 focus:shadow-outline`

export const btn = `flex bttn bttnButton1 text-button1 no-underline transition duration-500 ease-out hover:text-white tracking-tighter uppercase justify-center w-70% text-sm font-bold border-2 border-button1 py-2 px-4 rounded box shadow-md relative hover:z-10`

export const btnDisabled = (color = "bg-gray-300", text = 'text-white') => `border-0 text-base py-2 px-4 ${text} font-semibold rounded-lg shadow-btn ${color} uppercase cursor-not-allowed`
