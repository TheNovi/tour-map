<script lang="ts">
	import places from './data/places'

	//TODO Add divider
	//TODO Add facebook
</script>

<div class="bg-main-brown pt-10">
	{#each places.places as place}
		<div class="text-center w-max mx-auto mb-10">
			<div class="text-xl select-text">{place.city} - {place.date}</div>
			<div>
				<!-- <span class="fa-solid fa-house icon" /> -->
				<span class="fa-solid fa-music fa-fw icon" />
				<a href={`https://${place.club.link}`} target="_blank" rel="noopener noreferrer">
					{place.club.name}
				</a>
			</div>
			<div>
				<span class="fa-solid fa-location-dot fa-fw icon" />
				<a
					href={`https://goo.gl/maps/${place.club.map}`}
					class="text-gray-400 italic"
					target="_blank"
					rel="noopener noreferrer"
				>
					{place.club.address}
				</a>
			</div>
			<div class="flex">
				<a
					href={`https://${place.ticket}`}
					class="button"
					target="_blank"
					rel="noopener noreferrer"
				>
					Kup lístek
				</a>
			</div>
		</div>
	{/each}
</div>
