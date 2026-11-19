import react from '@vitejs/plugin-react'
import { defineConfig, transformWithOxc } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const transformJsxInJs = () => ({
  name: 'transform-jsx-in-js',
  enforce: 'pre',
  async transform(code, id) {
    if (!id.includes('node_modules') && id.endsWith('.js')) {
      return await transformWithOxc(code, id, {
        lang: 'jsx',
      })
    }
    return null
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    transformJsxInJs(),
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    rolldownOptions: {
      moduleTypes: {
        '.js': 'jsx',
      },
    },
  },
})
