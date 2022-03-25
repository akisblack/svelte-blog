import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
/** @type {import("@sveltejs/kit").Config} */

const config = {
	extensions: [".svelte", ".md"],

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	},

	preprocess: [
		mdsvex({
			extensions: [".md"]
		})
	],
};

export default config;
