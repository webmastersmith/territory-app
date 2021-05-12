const colors = require("tailwindcss/colors")
const { boxShadow } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

// const defaultTheme = require('windicss/defaultTheme')
// const colors = require('windicss/colors')
// const typography = require('windicss/plugin/typography')

const widthPercentage = {
	"10%": "10%",
	"20%": "20%",
	"25%": "25%",
	"30%": "30%",
	"33%": "33.3333%",
	"40%": "40%",
	"50%": "50%",
	"60%": "60%",
	"70%": "70%",
	"75%": "75%",
	"80%": "80%",
	"85%": "85%",
	"90%": "90%",
	"95%": "95%",
	"100%": "100%",
	"100": "100%",
}

module.exports = {
	// auto mode, delete index.css
	// mode: 'jit',
	// purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

	// production
	// mode: 'all',
	// preserveHtmlElements: false,
	// purge: {
	// 		enabled: true,
	// 		content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	// 		darkMode: false, // or 'media' or 'class'
	// 	},
		
	// development
	purge: {
		enabled: false,
		content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
		darkMode: false, // or 'media' or 'class'
	},
	darkMode: false, // or 'media' or 'class'

	// needed
	theme: {
		extend: {
			backgroundImage: {
				// 'gradient-btn': ' linear-gradient(to top left, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2) 30%, rgba(0, 0, 0, 0))',  // bg-gradient-btn
				// 'x': "url('img/x.svg')" //remove if not needed.  bg-x
			},
			borderRadius: {
				'btn': '0.625rem',
			},
			boxShadow: {
				'btn-inner':
					'inset -2px -2px 3px rgba(255, 255, 255, .6), inset 2px 2px 3px rgba(0, 0, 0, .6)',
				'btn': 'inset 2px 2px 3px rgba(255, 255, 255, .6),	inset -2px -2px 3px rgba(0, 0, 0, .6)',
			},
			colors: {
			// 	indigo: colors.indigo,
			'yellow-1': '#FFFF00',  //true yellow
			},
			container: {
				center: true,
				padding: "1.5rem",
			},
			flex: {
				'33': '0 1 33.33333%',
				'40': '0 1 40%',
				'20': '0 1 20%',
			},
			gridTemplateColumns: {
				'auto': 'repeat(auto-fill, minmax(0, 1fr))',
				'auto-310': 'repeat(auto-fill, minmax(310px, 1fr))',
				'auto-415': 'repeat(auto-fill, minmax(415px, 1fr))',
				'auto-430': 'repeat(auto-fill, minmax(430px, 1fr))'
			},
			height: widthPercentage,
			maxWidth: {
				...widthPercentage,
				...defaultTheme.spacing,
			},
			minWidth: {
				...widthPercentage,
				...defaultTheme.spacing,
			},
			width: {
				...widthPercentage,
				'84': '21rem',
			}
		}, // end extend
	},
	variants: {
		extend: {
			margin: ['first', 'last'],
			padding: ['first', 'last'],
			// transform: ['first', 'last'],
			// rotate: ['first', 'last'],
			boxShadow: ['active'],

		},
	},
	plugins: [],
}
