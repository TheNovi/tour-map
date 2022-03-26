<script lang="ts">
	import Catalog from '$lib/Catalog.svelte'
	import Map from '$lib/Map.svelte'

	//TODO robots.txt
	//TODO Header + footer
	//TODO Favicon
	//TODO Cross old places

	const title = 'DeeThane Tour 2022'
	const desc = 'Interaktivní mapa pro aktuální DeeThane tour'
	const img = 'https://deethanetour.cz/cz1.png' //TODO Better img
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

<div class="w-full text-2xl shadow-md p-2">{title}</div>
<div class="hidden md:flex flex-col h-full">
	<Map class="flex-grow px-32 text-xs lg:text-base" />
	<!-- TODO Bouncing arrow -->
	<!-- <div class="w-full text-center py-5">More...</div> -->
</div>
<Catalog />
<div class="flex flex-row  p-1 bg-black text-xs">
	<span>For any info contact Welfare</span>
	<div class="flex-grow" />
	<span>Created by TheNovi</span>
</div>
