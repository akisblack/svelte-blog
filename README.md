# Svelte Blog
>Live version: https://sveltekit-blog.netlify.app

### A blog template written in [SvelteKit](https://kit.svelte.dev) trying to not use any extra preprocessors so it can be easily adopted to real projects.

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