import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess({
    scss: {
      prependData: `@import 'src/styles/variables.scss';`
    },
    postcss: true
  }),
  kit: {
    adapter: adapter({
      pages: 'build',        // 빌드 산출물 위치
      assets: 'build',       // 정적 자산 위치
      fallback: 'index.html',// SPA처럼 새로고침해도 정상 동작
      precompress: false
    })
  }
};
