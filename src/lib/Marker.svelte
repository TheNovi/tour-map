<script lang="ts">
	import { fade } from 'svelte/transition'
	import IconLink from './components/IconLink.svelte'
	import type { Place } from './model'
	import { isOld, f } from './util/dates'

	//FIXME Svelte transitions add empty style to head every time triggered

	export let place: Place

	$: old = isOld(place)

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
	class:line-through={old}
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
		class:line-through={old}
		class="absolute bg-main-purple p-4 shadow-lg whitespace-nowrap z-10"
		style="left: {Math.min(place.position.x, 100)}%; top: {place.position.y}%;"
	>
		<div class="flex justify-between text-lg">
			<span class="select-text">
				{place.city}
			</span>
			<!-- <IconLink href={`//fb.me/e/${place.fb}`} icon="fa-brands fa-facebook-f" fafw /> -->
		</div>
		<div>
			<!-- TODO Add to calendar -->
			<span class="fa-solid fa-clock fa-fw icon" />
			<span class="col-span-7 select-text">
				{f(place.date)}
			</span>
		</div>
		<div>
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
			<a
				href={`//${place.ticket}`}
				class="button flex-grow"
				target="_blank"
				rel="noopener noreferrer"
			>
				Kup lístek
			</a>
		</div>
	</div>
{/if}
