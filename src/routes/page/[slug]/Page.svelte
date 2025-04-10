<script lang="ts">
  import { queryParameters, ssp } from "sveltekit-search-params";

  let { page } = $props();

  const params = queryParameters({ hello: ssp.string() });

  $effect(() => {
    params.update((state) => ({ ...state, hello: "term" }));
  });
</script>

<h1>{page.name}</h1>
