import type { Place } from '~/env';

// Date
const today = new Date();

const pad = (t: string | number) => {
	return t.toString().padEnd(2, '0');
};

export function f(date: string) {
	const d = new Date(date);
	return (
		`${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} ` +
		`${pad(d.getHours())}:${pad(d.getMinutes())}`
	);
}

export function isOld(place: Place): boolean {
	const d = new Date(place.date);
	d.setHours(d.getHours() + 2);
	return today > d;
}

// Link

export function link(prefix: string, url: string, http = false) {
	prefix = !prefix || prefix.endsWith('/') ? prefix : prefix + '/';
	// ${http ? '' : 's'}
	return `http:${url.startsWith('//') ? url : '//' + prefix + url}`;
}
