import type { Place } from '$lib/model'

const today = new Date()

const pad = (t: string | number) => {
	return t.toString().padEnd(2, '0')
}

export function f(date: string) {
	const d = new Date(date)
	return (
		`${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} ` +
		`${pad(d.getHours())}:${pad(d.getMinutes())}`
	)
}

export function isOld(place: Place): boolean {
	return today > new Date(place.date)
}
