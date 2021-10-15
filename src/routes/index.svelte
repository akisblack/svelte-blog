<script context="module">
	//get the article metadata
	const posts = import.meta.glob("./posts/*.md");
	let body = [];
	for (const path in posts) {
		body.push(posts[path]().then(({ metadata }) => metadata));
	}
	export async function load() {
		const articles = await Promise.all(body);
		return {
			props: {
				articles
			}
		};
	}
</script>

<script>
	// sort the articles by newest to oldest
	export let articles;
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
	articles.sort(sortByDate);
</script>

<!--markup for the card. see svelte docs for more info-->
<div id="blog">
	<h1>Blog</h1>
	<div class="outer-item-div">
		{#each articles as {slug, title, summary, published}}
			{#if published}
				<div class="item-div">
					<a rel="prefetch" href="/{slug}" class="item-name">{title}</a>
					<h2 class="item-desc">{summary}</h2>
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	/*styles for the article card*/
	:global(body) {
		background-color: black;
	}

	#blog {
		padding-left: 4em;
		padding-right: 1em;
	}

	@media (max-width: 690px) {
		#blog {
			padding-left: 1em;
		}

		.item-div {
			width: 15em;
		}
	}

	h1 {
		color: #fff;
		white-space: nowrap;
		font-size: 36px;
	}

	.outer-item-div {
		height: 22em;
		overflow-x: hidden;
		overflow-y: auto;
	}

	.item-div {
		border: 2px solid #fff;
		border-radius: 5px;
		width: 30em;
		height: auto;
		padding: 1em;
		margin-bottom: 1em;
	}

	.item-name {
		font-size: 22px;
		color: white;
	}

	.item-desc {
		font-size: 16px;
		color: white;
		font-weight: 400;
	}
</style>