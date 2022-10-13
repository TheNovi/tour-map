<script lang="ts">
	export let title: string;
	export let alt: string = title;
	export let src: string;
	export let href: string = '';
</script>

<div class="flex flex-col gap-5 text-center p-5">
	{title}
	<a {href} target="_blank" rel="noopener noreferrer">
		<img class="max-h-9" {src} {alt} />
	</a>
</div>
