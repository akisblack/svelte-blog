# Svelte Blog

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/akisblack/svelte-blog/Build%20and%20Deploy?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/akisblack/svelte-blog?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/akisblack/svelte-blog?style=for-the-badge)
![Website](https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fsveltekit-blog.netlify.app)

>Live version: https://sveltekit-blog.netlify.app

### A really bare-bones blog template written in [SvelteKit](https://kit.svelte.dev), using MDsveX.

---

## Developing

### Prerequisites

- Install [node.js](https://nodejs.org).
- Learn [Svelte](https://svelte.dev).

### Install dependencies

```bash
npm i
```

### Scripts

#### `npm run dev`

Runs a development server on http://localhost:3000.

#### `npm run build`

Builds the project into the `build` folder.

#### `npm run preview`

Runs the built project on http://localhost:3000.

### Project structure
```
/src/routes/posts/ --> The folder where your posts are located.
```
```
All other directories should be in the SvelteKit docs.
```

### Post metadata
- "slug" is the link your post will be on ex: https://example.com/blog/my-first-post.

- "title", "summary" and "author" should be self explanatory.

- "date" is the date your post was published in. Nearly all date formats work.

- "published" is a boolean. If true the post will display otherwise it will stay unpublished and not accessible anywhere outside the source code.

---

## License
This project is licensed under the Unlicense aka public domain.