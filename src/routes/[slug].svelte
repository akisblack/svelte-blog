<script context="module">
	//get posts
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params }) {
		return {
			props: {
				Post: await import(`../_posts/${params.slug}.md`)
			}
		};
	}
</script>

<script>
	//export the post component
	export let Post;
</script>

<svelte:head>
	<title>{Post.metadata.title} | Blog</title>
</svelte:head>

<div>
	<a href="/">Home</a>
	<h1>{Post.metadata.title}</h1>
	<h2>{Post.metadata.date}, by {Post.metadata.author}</h2>
	<hr />

	<div class="prose">
		<svelte:component this={Post.default} />
	</div>
</div>
