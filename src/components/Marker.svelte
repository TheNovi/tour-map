<script lang="ts">
	import IconLink from '@components/IconLink.svelte';
	import { fade } from 'svelte/transition';
	import type { Config, Place } from '~/env';
	import { f, isOld, link } from '~/util';

	//FIXME Svelte transitions add empty style to head every time triggered

	export let place: Place;
	export let config: Config;

	$: old = isOld(place);

	const mouseenter = () => {
		hover = true;
	};

	const mouseleave = () => {
		hover = false;
	};

	let hover = false;
</script>

<div
	class="absolute p-4 text-lg whitespace-nowrap uppercase"
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
		class="absolute p-4 whitespace-nowrap z-10 card bg-main-purple"
		style="left: {Math.min(place.position.x, 100)}%; top: {place.position.y}%;"
	>
		<div class="flex justify-between text-lg">
			<span class="select-text uppercase">
				{place.city}
			</span>
			<span class="mx-3">
				<IconLink href={link('fb.me/e', place.fb)} icon="fa-brands fa-facebook-f" fafw />
			</span>
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
			<a
				href={link('', place.club.link, place.club.http)}
				target="_blank"
				rel="noopener noreferrer"
			>
				{place.club.name}
			</a>
		</div>
		<div>
			<span class="fa-solid fa-location-dot fa-fw icon" />
			<a
				href={link('goo.gl/maps', place.club.map)}
				class="text-gray-400 italic"
				target="_blank"
				rel="noopener noreferrer"
			>
				{place.club.address}
			</a>
		</div>
		<div class="flex">
			<a
				href={link(config.url.tickets.prefix, place.ticket)}
				class="button flex-grow"
				target="_blank"
				rel="noopener noreferrer"
			>
				Kup lístek
			</a>
		</div>
	</div>
{/if}
