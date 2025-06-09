import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: { adapter: adapter({edge: false, split: false}) },
	extensions: ['.svelte', '.svx'],
	onwarn: (warning) => {
        if (warning.code === 'css-unused-selector') {
            return;
        }
	}
}
export default config;
