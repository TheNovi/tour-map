<script lang="ts">
	import IconLink from './components/IconLink.svelte'

	export let title
</script>

<div class="w-full text-lg md:text-2xl shadow-md py-2 px-5 flex items-center gap-3">
	{title}
	<div class="flex-grow" />
	<IconLink
		href={`//open.spotify.com/artist/7jQvZ5ZXC20VENORtQ9Lhy`}
		icon="fa-brands fa-spotify"
		fafw
	/>
	<IconLink href={`//twitter.com/realdeethane`} icon="fa-brands fa-twitter" fafw />
	<IconLink href={`//facebook.com/deethane`} icon="fa-brands fa-facebook" fafw />
	<IconLink href={`//instagram.com/realdeethane`} icon="fa-brands fa-instagram" fafw />
</div>
