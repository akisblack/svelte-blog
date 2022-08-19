
//get the article metadata
const postFiles = import.meta.glob("../_posts/*.md");
let body = [];
for (const path in postFiles) {
	body.push(postFiles[path]().then(({ metadata }) => metadata));
}
export async function load() {
	const posts = await Promise.all(body);
	return {
		posts
	};
}
