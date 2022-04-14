import type { Config, Place } from '../model' 
const places: { config: Config; places: Place[] } = {
	config: {
		url: {
			tickets: {
				prefix: 'goout.net/en/deethane',
			},
			songList: '3OaxLvI',
		},
	},
	places: [
		{
			city: 'Plzeň',
			date: '2022-05-07T19:00:00',
			fb: '1Okvo1uSs',
			ticket: 'szcwift',
			club: {
				name: 'Anděl Café, Music Bar',
				link: 'andelcafe.cz/musicbar',
				http: true,
				address: 'Bezručova 151/5, 301 00 Plzeň 3',
				map: 'fJpTQStVGNUwNq2dA',
			},
			position: { x: 15, y: 45 },
		},
		{
			city: 'Most',
			date: '2022-05-13T19:00:00',
			fb: '2jbr1EEpl',
			ticket: 'sziwift',
			club: {
				name: 'Nový Obzor Music Arena',
				link: 'novy-obzor.cz',
				http: true,
				address: 'Růžová 1280/4, 434 01',
				map: 'Uy2vF1W96fjCKEAb7',
			},
			position: { x: 20, y: 15 },
		},
		{
			city: 'Kolín',
			date: '2022-05-21T19:00:00',
			fb: '1HwMyGNkn',
			ticket: 'sznwift',
			club: {
				name: 'Staré lázně',
				link: 'starelazne.cz',
				address: 'Starokolínská 287, 280 02',
				map: 'dy2e6GVZfWbj3WNb6',
			},
			position: { x: 42, y: 35 },
		},
		{
			city: 'Liberec',
			date: '2022-05-27T19:00:00',
			fb: '1HW2rRVbg',
			ticket: 'sztwift',
			club: {
				name: 'BUNKR Rock Club',
				link: 'bunkrliberec.cz',
				address: 'Tržní náměstí, 460 01',
				map: 'isvhPk5TeEgaePMb7',
			},
			position: { x: 40, y: 8 },
		},
		{
			city: 'Třebíč',
			date: '2022-05-28T19:00:00',
			fb: '33k54DSpM',
			ticket: 'szuwift',
			club: {
				name: 'ROXY Club Třebíč',
				link: 'roxy-club.cz',
				address: 'Kpt. Jaroše 736/6, 674 01',
				map: '//g.page/roxyclubtrebic?share',
			},
			position: { x: 55, y: 68 },
		},
		{
			city: 'České Budějovice',
			date: '2022-06-03T19:00:00',
			fb: '2avMC37VT',
			ticket: 'szvwift',
			club: {
				name: 'MC Fabrika',
				link: 'mcfabrika.cz',
				address: 'Jeronýmova 6, 370 01',
				map: 'bA2LzCiLnhn6UK3C7',
			},
			position: { x: 25, y: 75 },
		},
		{
			city: 'Pardubice',
			date: '2022-06-04T19:00:00',
			fb: '2B650IPEH',
			ticket: 'szwwift',
			club: {
				name: 'Music club Žlutý pes',
				link: 'zlutak.cz',
				address: 'Ke Koupališti 62, 530 09 Pardubice II',
				map: 'hzidXSEAAxj2rNMZA',
			},
			position: { x: 52, y: 35 },
		},
		{
			city: 'Jablunkov',
			date: '2022-06-11T19:00:00',
			fb: '19D2WMkTV',
			ticket: 'szxwift',
			club: {
				name: 'Rock Cafe Southock',
				link: 'rokac.cz',
				address: 'Bělá 1069, 739 91',
				map: '//g.page/rokac?share',
			},
			position: { x: 88, y: 52 },
		},
	],
}

export default places
