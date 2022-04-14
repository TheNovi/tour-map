<script lang="ts">
	import IconLink from './components/IconLink.svelte'
	import link from './util/link'
	import places from './data/places'

	export let title
</script>

<div class="w-full text-lg md:text-2xl shadow-md py-2 px-5 flex items-center gap-3">
	{title}
	<div class="flex-grow" />
	<a
		href={link('spoti.fi', places.config.url.songList)}
		class="button px-2 md:px-5 text-base"
		target="_blank"
		rel="noopener noreferrer"
	>
		<span class="fa-brands fa-spotify fa-fw" />
		Set list
	</a>
	<!-- * Comming soon SetList -->
	<!-- <div class="button px-2 md:px-5 text-base hover:bg-main-blue opacity-70 items-center gap-1 flex">
		<span class="fa-brands fa-spotify fa-fw" />
		<span class="line-through">Set list</span>
		<span class="text-xs">(Již brzy)</span>
	</div> -->
	<IconLink
		href={link('open.spotify.com/artist', '7jQvZ5ZXC20VENORtQ9Lhy')}
		icon="fa-brands fa-spotify"
		fafw
	/>
	<IconLink href={link('twitter.com', 'realdeethane')} icon="fa-brands fa-twitter" fafw />
	<IconLink href={link('fb.me', 'deethane')} icon="fa-brands fa-facebook" fafw />
	<IconLink href={link('instagram.com', 'realdeethane')} icon="fa-brands fa-instagram" fafw />
</div>
