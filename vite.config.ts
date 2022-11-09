import vue from '@vitejs/plugin-vue'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import VueTypeImports from 'vite-plugin-vue-type-imports'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [IconsResolver()],
    }),
    Icons({ autoInstall: true }),
    VueTypeImports(),
  ],
  base: '/advancements/',
})
