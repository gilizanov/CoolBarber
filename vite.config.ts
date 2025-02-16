import eslintPlugin from '@nabla/vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import checker from 'vite-plugin-checker'

export default {
  base: '/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
        },
      },
    }),
    eslintPlugin(),
    checker({
      vueTsc: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    open: true,
  },
}
