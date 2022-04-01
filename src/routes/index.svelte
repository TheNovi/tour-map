<script lang="ts">
	import Catalog from '$lib/Catalog.svelte'
	import Header from '$lib/Header.svelte'
	import Map from '$lib/Map.svelte'

	//TODO robots.txt, SEO
	//TODO Add some subtle animations
	//TODO Comment Fb events before going live

	const title = 'Tour jak má BEAT' //TODO Add ' - PART I' on big screens (second element using hidden)
	const desc =
		'Interaktivní mapa se zastávkami Tour jak má BEAT. Klikni pro podrobné informace o jednotlivých městech.'
	const img = 'https://deethanetour.cz/cover1.jpg'
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

<div class="md:h-screen">
	<Header {title} />
	<div class="hidden md:flex flex-col h-full">
		<Map class="flex-grow px-32 text-xs lg:text-base" />
		<!-- TODO Bouncing arrow -->
		<!-- <div class="w-full text-center py-5">More...</div> -->
	</div>
</div>
<Catalog />
<div class="flex flex-row p-1 text-xs">
	<span>For any info, contact: <a href="mailto:welfarecz@gmail.com">welfarecz@gmail.com</a></span>
	<div class="flex-grow" />
	<span>Created by TheNovi</span>
</div>
