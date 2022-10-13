<script lang="ts">
	import places from '~/data/places';
	import Marker from '@components/Marker.svelte';
</script>

<div
	class="hidden md:flex flex-grow flex-col shrink-0 items-center justify-center px-32 text-xs lg:text-base"
>
	<div class="relative overflow-visible">
		{#each places.places as place}
			<Marker {place} config={places.config} />
		{/each}
		<img src="/cz1.png" alt="map" />
	</div>
</div>
