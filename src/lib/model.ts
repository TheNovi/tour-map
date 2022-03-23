export type Place = {
	city: string
	date: string
	fb: string
	ticket: string
	club: {
		name: string
		link: string
		address: string
		map: string
	}
	position: {
		x: number
		y: number
	}
}
