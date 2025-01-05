import vercelAdapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Preprocessors for handling Svelte files
	preprocess: vitePreprocess(),

	kit: {
		// Use the Vercel adapter for deployment
		adapter: vercelAdapter({
			// You can specify Vercel adapter options here if needed
			// For example: edge: true for edge functions
		})
	}
};

export default config;
