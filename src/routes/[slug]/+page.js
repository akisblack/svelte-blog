
//get posts
/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ params }) {
	return {
		Post: await import(`../../_posts/${params.slug}.md`)
	};
}
