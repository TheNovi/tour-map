<script lang="ts">
	import places from './data/places'
	import { isOld, f } from './util/dates'

	//TODO Add divider
	//TODO Add facebook event
</script>

<div class="pt-10">
	{#each places.places as place}
		<div class="text-center w-max mx-auto mb-10" class:line-through={isOld(place)}>
			<div class="text-xl select-text">{place.city} - {f(place.date)}</div>
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
					href={place.club.map.startsWith('//')
						? place.club.map
						: `//goo.gl/maps/${place.club.map}`}
					class="text-gray-400 italic"
					target="_blank"
					rel="noopener noreferrer"
				>
					{place.club.address}
				</a>
			</div>
			<div class="flex justify-center">
				<a
					href={`//${place.ticket}`}
					class="button px-20"
					target="_blank"
					rel="noopener noreferrer"
				>
					Kup lístek
				</a>
			</div>
		</div>
	{/each}
</div>
