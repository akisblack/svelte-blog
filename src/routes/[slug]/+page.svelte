

<script>
	import { onMount } from 'svelte';
	//export the post component
	export let data;
	$: ({ Post } = data);

	let article;
	let readingTime;
	onMount(() => {
		readingTime = getReadingTime();
	});
	// https://dev.to/michaelburrows/calculate-the-estimated-reading-time-of-an-article-using-javascript-2k9l
	function getReadingTime() {
		let text = article.innerText;
		let wpm = 225;
		let words = text.trim().split(/\s+/).length;
		return Math.ceil(words / wpm);
	}
</script>

<svelte:head>
	<title>{Post.metadata.title} | Blog</title>
</svelte:head>

<div>
	<a href="/">Home</a>
	<h1>{Post.metadata.title}</h1>
	<h2>{Post.metadata.date}, by {Post.metadata.author}, {readingTime} minute read</h2>
	<hr />

	<div class="prose" bind:this={article}>
		<svelte:component this={Post.default} />
	</div>
</div>

<style>
	/* generated css from windicss/plugin/typography, removed normalized styles*/
	:global(.prose) {
		color: #374151;
		max-width: 65ch;
		font-size: 1rem;
		line-height: 1.75;
	}
	:global(.prose [class~="lead"]) {
		color: #4b5563;
		font-size: 1.25em;
		line-height: 1.6;
		margin-top: 1.2em;
		margin-bottom: 1.2em;
	}
	:global(.prose a) {
		color: #111827;
		text-decoration: underline;
		font-weight: 500;
	}
	:global(.prose strong) {
		color: #111827;
		font-weight: 600;
	}
	:global(.prose ol[type="A"]) {
		--list-counter-style: upper-alpha;
	}
	:global(.prose ol[type="a"]) {
		--list-counter-style: lower-alpha;
	}
	:global(.prose ol[type="A s"]) {
		--list-counter-style: upper-alpha;
	}
	:global(.prose ol[type="a s"]) {
		--list-counter-style: lower-alpha;
	}
	:global(.prose ol[type="I"]) {
		--list-counter-style: upper-roman;
	}
	:global(.prose ol[type="i"]) {
		--list-counter-style: lower-roman;
	}
	:global(.prose ol[type="I s"]) {
		--list-counter-style: upper-roman;
	}
	:global(.prose ol[type="i s"]) {
		--list-counter-style: lower-roman;
	}
	:global(.prose ol[type="1"]) {
		--list-counter-style: decimal;
	}
	:global(.prose ol > li) {
		position: relative;
		padding-left: 1.75em;
	}
	:global(.prose ol > li:before) {
		content: counter(list-item, var(--list-counter-style, decimal)) ".";
		position: absolute;
		font-weight: 400;
		color: #6b7280;
		left: 0;
	}
	:global(.prose ul > li) {
		position: relative;
		padding-left: 1.75em;
	}
	:global(.prose ul > li:before) {
		content: "";
		position: absolute;
		background-color: #d1d5db;
		border-radius: 50%;
		width: 0.375em;
		height: 0.375em;
		top: 0.6875em;
		left: 0.25em;
	}
	:global(.prose hr) {
		border-color: #e5e7eb;
		margin-top: 3em;
		margin-bottom: 3em;
	}
	:global(.prose blockquote) {
		font-weight: 500;
		font-style: italic;
		color: #111827;
		border-left-width: 0.25rem;
		border-color: #e5e7eb;
		quotes: "\201c""\201d""\2018""\2019";
		margin-top: 1.6em;
		margin-bottom: 1.6em;
		padding-left: 1em;
	}
	:global(.prose blockquote p:first-of-type:before) {
		content: open-quote;
	}
	:global(.prose blockquote p:last-of-type:after) {
		content: close-quote;
	}
	:global(.prose h1) {
		color: #111827;
		font-weight: 800;
		font-size: 2.25em;
		margin-top: 0;
		margin-bottom: 0.8888889em;
		line-height: 1.1111111;
	}
	:global(.prose h2) {
		color: #111827;
		font-weight: 700;
		font-size: 1.5em;
		margin-top: 2em;
		margin-bottom: 1em;
		line-height: 1.3333333;
	}
	:global(.prose h3) {
		color: #111827;
		font-weight: 600;
		font-size: 1.25em;
		margin-top: 1.6em;
		margin-bottom: 0.6em;
		line-height: 1.6;
	}
	:global(.prose h4) {
		color: #111827;
		font-weight: 600;
		margin-top: 1.5em;
		margin-bottom: 0.5em;
		line-height: 1.5;
	}
	:global(.prose figure figcaption) {
		color: #6b7280;
		font-size: 0.875em;
		line-height: 1.4285714;
		margin-top: 0.8571429em;
	}
	:global(.prose code) {
		color: #111827;
		font-weight: 600;
		font-size: 0.875em;
	}
	:global(.prose code:before) {
		content: "`";
	}
	:global(.prose code:after) {
		content: "`";
	}
	:global(.prose a code) {
		color: #111827;
	}
	:global(.prose pre) {
		color: #e5e7eb;
		background-color: #1f2937;
		overflow-x: auto;
		font-size: 0.875em;
		line-height: 1.7142857;
		margin-top: 1.7142857em;
		margin-bottom: 1.7142857em;
		border-radius: 0.375rem;
		padding: 0.8571429em 1.1428571em;
	}
	:global(.prose pre code) {
		background-color: transparent;
		border-width: 0;
		border-radius: 0;
		padding: 0;
		font-weight: 400;
		color: inherit;
		font-size: inherit;
		font-family: inherit;
		line-height: inherit;
	}
	:global(.prose pre code:before) {
		content: none;
	}
	:global(.prose pre code:after) {
		content: none;
	}
	:global(.prose table) {
		width: 100%;
		table-layout: auto;
		text-align: left;
		margin-top: 2em;
		margin-bottom: 2em;
		font-size: 0.875em;
		line-height: 1.7142857;
	}
	:global(.prose thead) {
		color: #111827;
		font-weight: 600;
		border-bottom-width: 1px;
		border-bottom-color: #d1d5db;
	}
	:global(.prose thead th) {
		vertical-align: bottom;
		padding-right: 0.5714286em;
		padding-bottom: 0.5714286em;
		padding-left: 0.5714286em;
	}
	:global(.prose tbody tr) {
		border-bottom-width: 1px;
		border-bottom-color: #e5e7eb;
	}
	:global(.prose tbody tr:last-child) {
		border-bottom-width: 0;
	}
	:global(.prose tbody td) {
		vertical-align: top;
		padding: 0.5714286em;
	}
	:global(.prose p) {
		margin-top: 1.25em;
		margin-bottom: 1.25em;
	}
	:global(.prose img) {
		margin-top: 2em;
		margin-bottom: 2em;
	}
	:global(.prose video) {
		margin-top: 2em;
		margin-bottom: 2em;
	}
	:global(.prose figure) {
		margin-top: 2em;
		margin-bottom: 2em;
	}
	:global(.prose figure > *) {
		margin-top: 0;
		margin-bottom: 0;
	}
	:global(.prose h2 code) {
		font-size: 0.875em;
	}
	:global(.prose h3 code) {
		font-size: 0.9em;
	}
	:global(.prose ol),
	:global(.prose ul) {
		margin-top: 1.25em;
		margin-bottom: 1.25em;
		list-style-type: none;
	}
	:global(.prose li) {
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}
	:global(.prose > ul > li p) {
		margin-top: 0.75em;
		margin-bottom: 0.75em;
	}
	:global(.prose > ul > li > *:first-child) {
		margin-top: 1.25em;
	}
	:global(.prose > ul > li > *:last-child) {
		margin-bottom: 1.25em;
	}
	:global(.prose > ol > li > *:first-child) {
		margin-top: 1.25em;
	}
	:global(.prose > ol > li > *:last-child) {
		margin-bottom: 1.25em;
	}
	:global(.prose ul ul),
	:global(.prose ul ol),
	:global(.prose ol ul),
	:global(.prose ol ol ){
		margin-top: 0.75em;
		margin-bottom: 0.75em;
	}
	:global(.prose hr + *) {
		margin-top: 0;
	}
	:global(.prose h2 + *) {
		margin-top: 0;
	}
	:global(.prose h3 + *) {
		margin-top: 0;
	}
	:global(.prose h4 + *) {
		margin-top: 0;
	}
	:global(.prose thead th:first-child) {
		padding-left: 0;
	}
	:global(.prose thead th:last-child) {
		padding-right: 0;
	}
	:global(.prose tbody td:first-child) {
		padding-left: 0;
	}
	:global(.prose tbody td:last-child) {
		padding-right: 0;
	}
	:global(.prose > :first-child) {
		margin-top: 0;
	}
	:global(.prose > :last-child) {
		margin-bottom: 0;
	}
</style>