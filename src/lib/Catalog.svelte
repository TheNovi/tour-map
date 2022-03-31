<script lang="ts">
	import places from './data/places'
	import { f, isOld } from './util/dates'

	//TODO Better facebook event
</script>

<div class="m-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
	{#each places.places as place}
		<div
			class="flex flex-col text-center p-5 card bg-gradient-to-br from-transparent to-main-purple"
			class:line-through={isOld(place)}
		>
			<div class="text-xl select-text">{place.city.toUpperCase()} - {f(place.date)}</div>
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
			<div>
				<span class="fa-brands fa-facebook fa-fw icon" />
				<a href={`//fb.me/e/${place.fb}`} target="_blank" rel="noopener noreferrer">
					Facebook event
				</a>
			</div>
			<div class="flex-grow" />
			<div class="flex justify-center">
				<a
					href={places.config.url.tickets.prefix + place.ticket}
					class="button flex-grow"
					target="_blank"
					rel="noopener noreferrer"
				>
					Kup lístek
				</a>
			</div>
		</div>
	{/each}
</div>
