export default function link(prefix: string, url: string, http = false) {
	prefix = !prefix || prefix.endsWith('/') ? prefix : prefix + '/'
	return `http${http ? '' : 's'}:${url.startsWith('//') ? url : '//' + prefix + url}`
}
