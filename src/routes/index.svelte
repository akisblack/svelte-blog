<script context="module">
	//get the article metadata
	const postFiles = import.meta.glob("./_posts/*.md");
	let body = [];
	for (const path in postFiles) {
		body.push(postFiles[path]().then(({ metadata }) => metadata));
	}
	export async function load() {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	// sort the articles by newest to oldest
	export let posts;
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
	posts.sort(sortByDate);
</script>

<!--markup for the card. see svelte docs for more info-->
<div class="blog">
	<h1>Posts</h1>
	{#each posts as { slug, title, summary, published }}
		{#if published}
			<a rel="prefetch" href={slug} class="item-name">{title}</a>
			<p class="item-desc">- {summary}</p>
		{/if}
	{/each}
</div>

<style>
	/*styles for the article card*/
	.blog {
		padding-left: 4em;
		padding-right: 1em;
	}

	@media (max-width: 690px) {
		.blog {
			padding-left: 1em;
		}
	}

	h1 {
		color: #fff;
	}

	p, a {
		display: inline-flex;
		font-size: large;
		color: #fff;
	}
</style>