export const btnCSS = (color = "bg-green-500", hoverColor = 'bg-green-600', text = 'text-white', size = 'text-base') => `border-0 ${size} py-2 px-4 text-shadow-btn ${text} font-semibold rounded-btn shadow-btn bg-gradient-btn ${color} hover:${hoverColor} uppercase active:shadow-btn-inner`
 
export const btnDisabled = (color = "bg-gray-300", text = 'text-white') => `border-0 text-base py-2 px-4 ${text} font-semibold rounded-lg shadow-btn ${color} uppercase cursor-not-allowed`