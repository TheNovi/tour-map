<script lang="ts">
	import Marker from './Marker.svelte';
</script>

<div class="flex flex-col shrink-0 items-center justify-center h-full">
	<div class="relative">
		<Marker label="0,0" offset={[0, 0]} />
		<Marker label="Top" offset={[35, 5]} />
		<Marker label="left" offset={[0, 27]} />
		<Marker label="rigth" offset={[95, 56]} />
		<Marker label="100,100" offset={[100, 100]} />
		<img src="/cz1.png" alt="map" />
	</div>
</div>
