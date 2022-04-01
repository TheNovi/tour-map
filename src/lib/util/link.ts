export default function link(prefix: string, url: string, http = false) {
	prefix = !prefix || prefix.endsWith('/') ? prefix : prefix + '/'
	// ${http ? '' : 's'}
	return `http:${url.startsWith('//') ? url : '//' + prefix + url}`
}
