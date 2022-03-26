<script lang="ts">
	export let href: string
	export let icon: string
	export let fafw = false
</script>

<a {href} class="no-underline" target="_blank" rel="noopener noreferrer">
	<span class={icon} class:fa-fw={fafw} />
</a>
