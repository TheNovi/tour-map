<script lang="ts">
	import places from '$lib/data/places'
	import Marker from '$lib/Marker.svelte'
</script>

<div class={`flex flex-col shrink-0 items-center justify-center ${$$restProps.class}`}>
	<div class="relative overflow-visible">
		{#each places.places as place}
			<Marker {place} config={places.config} />
		{/each}
		<img src="/cz1.png" alt="map" />
	</div>
</div>
