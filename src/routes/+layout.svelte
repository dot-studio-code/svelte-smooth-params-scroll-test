<script>
	let { children } = $props();
</script>

{@render children()}

<style lang="scss">
	:global(html) {
		font-size: 16px;
	}

	:global(html),
	:global(body),
	:global(figure) {
		max-width: 100vw;
		margin: 0;
		padding: 0;
		scroll-behavior: smooth;
	}
</style>
