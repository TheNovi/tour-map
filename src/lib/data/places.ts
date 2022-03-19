//TODO From static file
import type { Place } from '../model'

const places: { config: {}; places: Place[] } = {
	config: {},
	places: [
		// {
		// 	city: 'Praha',
		// 	date: '29.5.2022 19:00',
		// 	fb: '1ENNmAGt0',
		// 	ticket: 'google.com/search?q=Gde+tour',
		// 	club: {
		// 		name: 'Lucerna Music Bar',
		// 		link: 'musicbar.cz',
		// 		address: 'Vodičkova 36, 110 00, Praha 1',
		// 		map: 'jewzeV64BkTvfdKX7',
		// 	},
		// 	position: { x: 30, y: 35 },
		// },
		{
			city: 'Klatovy',
			date: '6.5.2022 00:00',
			fb: '',
			ticket: 'google.com/search?q=Gde+tour',
			club: {
				name: 'Falcon klub',
				link: 'falconclub.cz',
				address: 'Kpt. Jaroše 118, Klatovy I, 339 01',
				map: '4yVsU1AR1CDYQt7cA',
			},
			position: { x: 15, y: 60 },
		},
		{
			city: 'Kladno',
			date: '7.5.2022 00:00',
			fb: '',
			ticket: 'google.com/search?q=Gde+tour',
			club: {
				name: '',
				link: '',
				address: '',
				map: '',
			},
			position: { x: 25, y: 30 },
		},
		{
			city: 'Olomouc',
			date: '13.5.2022 00:00',
			fb: '',
			ticket: 'google.com/search?q=Gde+tour',
			club: {
				name: '15 Minut Music Club',
				link: '15-minut-music-club.business.site', //? Maybe link to facebook page
				address: 'Komenského 32, 779 00',
				map: 'Azto5U8DoYdRCk7f8',
			},
			position: { x: 70, y: 50 },
		},
		{
			city: 'Uherské Hradiště',
			date: '14.5.2022 00:00',
			fb: '',
			ticket: 'google.com/search?q=Gde+tour',
			club: {
				name: 'Klub Mír',
				link: 'klubmir.cz',
				address: 'Tř. Maršála Malinovského 773, 686 01',
				map: 'DU1oxAJ4LP5mr9ts7',
			},
			position: { x: 70, y: 75 },
		},
		{
			city: 'Most',
			date: '21.5.2022 00:00',
			fb: '',
			ticket: 'google.com/search?q=Gde+tour',
			club: {
				name: 'Nový Obzor Music Arena',
				http: true,
				link: 'novy-obzor.cz/',
				address: 'Růžová 1280, 434 01 Most',
				map: 'Uy2vF1W96fjCKEAb7',
			},
			position: { x: 20, y: 15 },
		},
		{
			city: 'Tábor',
			date: '27.5.2022 00:00',
			fb: '',
			ticket: 'google.com/search?q=Gde+tour',
			club: {
				name: 'Klub Barbar',
				link: 'hotelpalcat.cz/barbar/',
				address: 'Vančurova 2904, 390 01',
				map: '9xiZcC9MMMHvmZUL9',
			},
			position: { x: 35, y: 60 },
		},
		{
			city: 'České Budějovice',
			date: '28.5.2022 00:00',
			fb: '',
			ticket: 'google.com/search?q=Gde+tour',
			club: {
				name: 'Hudební klub K2',
				link: 'k2cb.cz',
				address: 'Sokolský ostrov 462, 370 01',
				map: 'Gf5jiKu1XuYnH9rr9',
			},
			position: { x: 25, y: 75 },
		},
		{
			city: 'Jihlava',
			date: '3.6.2022 00:00',
			fb: '',
			ticket: 'google.com/search?q=Gde+tour',
			club: {
				name: 'D Klub',
				link: 'dclub.cz',
				address: '15, Žižkova 1696, 586 01',
				map: 'p4ecBFEM1WgQfbyP6',
			},
			position: { x: 50, y: 61 },
		},
		{
			city: 'Pardubice',
			date: '4.6.2022 00:00',
			fb: '',
			ticket: 'google.com/search?q=Gde+tour',
			club: {
				name: 'Music club Žlutý pes',
				link: 'zlutak.cz',
				address: 'Ke Koupališti 62, 530 09 Pardubice II',
				map: 'hzidXSEAAxj2rNMZA',
			},
			position: { x: 50, y: 35 },
		},
	],
}

export default places
