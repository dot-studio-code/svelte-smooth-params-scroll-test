<script lang="ts">
  import Page from "./Page.svelte";

  let { data } = $props();
</script>

{#key data.page.id}
  <Page page={data.page} />
{/key}

<ul>
  {#each data.pages as p}
    {#key p.id}
      <li><a href="/page/{p.id}">{p.name}</a></li>
    {/key}
  {/each}
</ul>
