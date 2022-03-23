<script lang="ts">
	import { fade } from 'svelte/transition'
	import type { Place } from './model'

	//FIXME Svelte transitions add empty style to head every time triggered

	export let place: Place

	const mouseenter = () => {
		hover = true
	}

	const mouseleave = () => {
		hover = false
	}

	let hover = false
</script>

<div
	class="absolute p-4 text-lg whitespace-nowrap"
	style="left: {place.position.x}%; top: {place.position.y}%;"
	on:mouseenter={mouseenter}
>
	{place.city}
</div>

{#if hover}
	<div
		on:mouseenter={mouseenter}
		on:mouseleave={mouseleave}
		transition:fade
		class="absolute bg-main-purple p-4 shadow-lg whitespace-nowrap z-10"
		style="left: {Math.min(place.position.x, 100)}%; top: {place.position.y}%;"
	>
		<div class="flex justify-between text-lg">
			<span class="select-text">
				{place.city}
			</span>
			<a
				href={`//fb.me/e/${place.fb}`}
				class="no-underline mx-3"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="fa-brands fa-facebook-f fa-fw" />
			</a>
		</div>
		<div>
			<!-- TODO Add to calendar -->
			<span class="fa-solid fa-clock fa-fw icon" />
			<span class="col-span-7 select-text">
				{place.date}
			</span>
		</div>
		<div>
			<!-- <span class="fa-solid fa-house icon" /> -->
			<span class="fa-solid fa-music fa-fw icon" />
			<a href={`//${place.club.link}`} target="_blank" rel="noopener noreferrer">
				{place.club.name}
			</a>
		</div>
		<div>
			<span class="fa-solid fa-location-dot fa-fw icon" />
			<a
				href={place.club.map.startsWith('//') ? place.club.map : `//goo.gl/maps/${place.club.map}`}
				class="text-gray-400 italic"
				target="_blank"
				rel="noopener noreferrer"
			>
				{place.club.address}
			</a>
		</div>
		<div class="flex">
			<a href={`//${place.ticket}`} class="button" target="_blank" rel="noopener noreferrer">
				Kup lístek
			</a>
		</div>
	</div>
{/if}

<style scoped lang="postcss">
	/* .button {
		@apply text-white no-underline;
		@apply flex-grow text-center bg-blue-800 rounded-md shadow-lg p-1 my-2;
	} */

	.icon {
		@apply text-lg mr-2;
	}
</style>
