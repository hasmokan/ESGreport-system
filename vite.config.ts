import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from "@rollup/plugin-alias";
import image from '@rollup/plugin-image';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [image(),alias(),vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "./src/assets/css/main.scss";' //预定义文件的入口
      }
    }
  },
  build: {
    chunkSizeWarningLimit:2500,
    rollupOptions: {
      external: ['vue','element-plus']
    },
    // ...其他构建配置
  },
  base:'./',
})
