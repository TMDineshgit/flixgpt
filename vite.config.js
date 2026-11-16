import react from '@vitejs/plugin-react'
import { defineConfig, transformWithOxc } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const allowJsxInAllFiles = () => ({
  name: 'allow-jsx-in-js-and-ts',
  enforce: 'pre',
  async transform(code, id) {
    // Skip node_modules and files that already support JSX natively
    if (id.includes('node_modules') || !/\.[jt]s$/.test(id)) {
      return null;
    }

    // Parse .js as 'jsx' and .ts as 'tsx'
    const lang = id.endsWith('.ts') ? 'tsx' : 'jsx';

    return await transformWithOxc(code, id, {
      lang,
      jsx: {
        runtime: 'automatic',
      },
    });
  },
});


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    allowJsxInAllFiles(),
    react(),
    tailwindcss(),
  ],
  oxc: {
    include: /\.[jt]sx?$/,
  },
})
