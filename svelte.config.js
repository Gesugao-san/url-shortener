import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static';

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'dist',
      assets: 'dist',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      //base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
      //base: process.env.NODE_ENV === 'production' ? '/url-shortener' : '',
      base: process.env.NODE_ENV === 'production' ? '/' + process.env.BASE_PATH : '',
    }
  }
}
