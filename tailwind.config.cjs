/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				main: {
					pink: '#bd16c5', //#F3B2F6
					blue: '#003e6b', //#0698FE
					purple: '#641577', //#641577
					white: '#f8ecf5', //#F0D5E8
				},
				default: {
					pink: '#F3B2F6',
					blue: '#0698FE',
					purple: '#641577',
					white: '#F0D5E8',
				},
			},
			animation: {
				gradient: 'gradient 20s ease-in-out infinite', //Not used at the moment
			},
			keyframes: {
				gradient: {
					'0%, 100%': { 'background-position': '0%' },
					'50%': { 'background-position': '100%' },
				},
			},
		},
	},
	plugins: [],
}
