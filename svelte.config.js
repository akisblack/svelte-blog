import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
/** @type {import("@sveltejs/kit").Config} */

const config = {
	extensions: [".svelte", ".md", ".svx"],

	kit: {
		adapter: adapter()
	},

	preprocess: [
		mdsvex({
			extensions: [".svelte.md", ".md", ".svx"],

			smartypants: {
				dashes: "oldschool",
			},
		})
	],
};

export default config;
