import adapter from '@sveltejs/adapter-static';
import fs from 'node:fs';
const _projects = JSON.parse(fs.readFileSync('./src/routes/_projects.json'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		//target: '#svelte',
		// prerender: {
		// 	pages: ['/'].concat(_projects.projects.map(p => `/${p.slug}`))
		// }
	}
};

export default config;
