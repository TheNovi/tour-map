<script lang="ts">
	import { fade } from 'svelte/transition';
	export let label: string;
	export let offset: number[];

	const mouseenter = () => {
		hover = true;
	};

	const mouseleave = () => {
		hover = false;
	};

	let hover = false;
</script>

<div
	class="absolute"
	style="left: {offset[0]}%; top: {offset[1]}%;"
	on:mouseenter={mouseenter}
	on:mouseleave={mouseleave}
>
	<div class="bg-pink-600">
		{label}
	</div>
</div>
{#if hover}
	<div
		on:mouseenter={mouseenter}
		on:mouseleave={mouseleave}
		transition:fade
		class="absolute bg-pink-900 p-1"
		style="left: {offset[0]}%; top: {offset[1]}%;"
	>
		Super long text with lots of words.
	</div>
{/if}
