import type { Place } from '../model'

const places: { config: {}; places: Place[] } = {
	config: {},
	places: [
		// {
		// 	city: 'Praha',
		// 	date: '2022-05-29T19:00:00',
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
			date: '2022-03-06T00:00:00',
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
			date: '2022-05-07T00:00:00',
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
			date: '2022-05-13T00:00:00',
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
			date: '2022-05-14T00:00:00',
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
			date: '2022-05-21T00:00:00',
			fb: '',
			ticket: 'google.com/search?q=Gde+tour',
			club: {
				name: 'Nový Obzor Music Arena',
				link: 'novy-obzor.cz',
				address: 'Růžová 1280, 434 01 Most',
				map: 'Uy2vF1W96fjCKEAb7',
			},
			position: { x: 20, y: 15 },
		},
		{
			city: 'Tábor',
			date: '2022-05-27T00:00:00',
			fb: '',
			ticket: 'google.com/search?q=Gde+tour',
			club: {
				name: 'Klub Barbar',
				link: 'hotelpalcat.cz/barbar',
				address: 'Vančurova 2904, 390 01',
				map: '9xiZcC9MMMHvmZUL9',
			},
			position: { x: 35, y: 60 },
		},
		{
			city: 'České Budějovice',
			date: '2022-05-28T00:00:00',
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
			date: '2022-06-03T00:00:00',
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
			date: '2022-06-04T00:00:00',
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

// const real: Place[] = [
// 	{
// 		city: 'Plzeň',
// 		date: '2022-05-07T20:00:00',
// 		fb: '',
// 		ticket: 'google.com/search?q=Gde+tour',
// 		club: {
// 			name: 'Anděl Café, Music Bar',
// 			link: 'andelcafe.cz/musicbar',
// 			address: 'Bezručova 151/5, 301 00 Plzeň 3',
// 			map: 'fJpTQStVGNUwNq2dA',
// 		},
// 		position: { x: 15, y: 45 },
// 	},
// 	{
// 		city: 'Most',
// 		date: '2022-05-13T20:00:00',
// 		fb: '',
// 		ticket: 'google.com/search?q=Gde+tour',
// 		club: {
// 			name: 'Nový Obzor Music Arena',
// 			link: 'novy-obzor.cz',
// 			address: 'Růžová 1280, 434 01',
// 			map: 'Uy2vF1W96fjCKEAb7',
// 		},
// 		position: { x: 20, y: 15 },
// 	},
// 	{
// 		city: 'Kolín',
// 		date: '2022-05-21T20:00:00',
// 		fb: '',
// 		ticket: 'google.com/search?q=Gde+tour',
// 		club: {
// 			name: 'Staré lázně',
// 			link: 'starelazne.cz',
// 			address: 'Starokolínská 287, 280 02',
// 			map: 'dy2e6GVZfWbj3WNb6',
// 		},
// 		position: { x: 42, y: 35 },
// 	},
// 	{
// 		city: 'Liberec',
// 		date: '2022-05-27T20:00:00',
// 		fb: '',
// 		ticket: 'google.com/search?q=Gde+tour',
// 		club: {
// 			name: 'BUNKR Rock Club',
// 			link: 'bunkrliberec.cz',
// 			address: 'Tržní náměstí, 460 01',
// 			map: 'isvhPk5TeEgaePMb7',
// 		},
// 		position: { x: 40, y: 8 },
// 	},
// 	{
// 		city: 'Třebíč',
// 		date: '2022-05-28T20:00:00',
// 		fb: '',
// 		ticket: 'google.com/search?q=Gde+tour',
// 		club: {
// 			name: 'ROXY Club Třebíč',
// 			link: 'roxy-club.cz',
// 			address: 'Kpt. Jaroše 736/6, 674 01',
// 			map: '//g.page/roxyclubtrebic?share',
// 		},
// 		position: { x: 55, y: 68 },
// 	},
// 	{
// 		city: 'České Budějovice',
// 		date: '2022-06-03T20:00:00',
// 		fb: '',
// 		ticket: 'google.com/search?q=Gde+tour',
// 		club: {
// 			name: 'MC Fabrika',
// 			link: 'mcfabrika.cz',
// 			address: 'Jeronýmova 6, 370 01',
// 			map: 'bA2LzCiLnhn6UK3C7',
// 		},
// 		position: { x: 25, y: 75 },
// 	},
// 	{
// 		city: 'Pardubice',
// 		date: '2022-06-04T20:00:00',
// 		fb: '',
// 		ticket: 'google.com/search?q=Gde+tour',
// 		club: {
// 			name: 'Music club Žlutý pes',
// 			link: 'zlutak.cz',
// 			address: 'Ke Koupališti 62, 530 09 Pardubice II',
// 			map: 'hzidXSEAAxj2rNMZA',
// 		},
// 		position: { x: 52, y: 35 },
// 	},
// 	{
// 		city: 'Jablůnkov',
// 		date: '2022-06-11T20:00:00',
// 		fb: '',
// 		ticket: 'google.com/search?q=Gde+tour',
// 		club: {
// 			name: 'Rock Cafe Southock',
// 			link: 'rokac.cz',
// 			address: 'Bělá 1069, 739 91',
// 			map: '//g.page/rokac?share',
// 		},
// 		position: { x: 90, y: 52 },
// 	},
// ]
// places.places = real

export default places
