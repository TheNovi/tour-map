<script lang="ts">
	import Map from '$lib/Map.svelte'

	//TODO robots.txt

	const title = 'DeeThane Tour 2022'
	const desc = 'Interaktivní mapa pro 2022 tour'
	const img = 'https://pensive-mirzakhani-203793.netlify.app/cz1.png' //TODO Better img, main domain
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="apple-mobile-web-app-title" content={title} />
	<meta name="application-name" content={title} />
	<meta name="theme-color" content="#ffffff" />
	<meta name="description" content={desc} />
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={desc} />
	<meta itemprop="image" content={img} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@realdeethane" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:creator" content="@TheN0vi" />
	<meta name="twitter:image" content={img} />
	<meta name="og:image" content={img} />
	<meta name="og:image:secure_url" content={img} />
	<meta name="image" property="og:image" content={img} />
	<meta property="og:site_name" content={title} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>

<Map />
