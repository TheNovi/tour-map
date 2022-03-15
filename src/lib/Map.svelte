<script lang="ts">
	import places from '$lib/data/places'
	import Marker from './Marker.svelte'
</script>

<div class={`flex flex-col shrink-0 items-center justify-center ${$$restProps.class}`}>
	<div class="relative overflow-visible">
		<!-- <Marker city="0,0" position={[0, 0]} />
		<Marker city="Top" position={[35, 5]} />
		<Marker city="left" position={[0, 27]} />
		<Marker city="rigth" position={[95, 56]} />
		<Marker city="100,100" position={[100, 100]} /> -->
		{#each places.places as place}
			<Marker {place} />
		{/each}
		<img src="/cz1.png" alt="map" />
	</div>
</div>
