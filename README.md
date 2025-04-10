# Sveltekit scroll break demo

This repository shows strange navigation scoll behaviour when the library `"sveltekit-search-params"` is included.

additionally, some strange things happen with:

```
	{#key data.page.id}
		<Page page={data.page} />
	{/key}
```

in `page/[slug]/+page.svelte` - although something like this should work.

To replicate, clone, `npm i` and `npm run dev`
