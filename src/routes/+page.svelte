<script>
	// sort the articles by newest to oldest
	export let data;
	$: ({ posts } = data);
	function sortByDate(a, b) {
		const dateA = a.date;
		const dateB = b.date;
		let comparison = 0;
		if (dateA > dateB) {
			comparison = 1;
		} else if (dateA < dateB) {
			comparison = -1;
		}
		return comparison * -1;
	}
</script>

<!--markup for the card. see svelte docs for more info-->
<div>
	<h1>Posts</h1>
	{#each posts.sort(sortByDate) as { slug, title, summary, published }}
		{#if published}
			<a rel="prefetch" href={slug}>{title}</a>
			<p>- {summary}</p>
		{/if}
	{/each}
</div>
