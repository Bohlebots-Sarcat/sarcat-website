import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	kit: {
		adapter: adapter({
			pages: 'public',
			assets: 'public',
			fallback: '200.html' // Page to load when a prerendered route is not found
		}),
	},
	preprocess: vitePreprocess() //Moved preprocess outside of the kit object
};

export default config;