import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'import.meta.env.VITE_API_BASE_URL': JSON.stringify('http://localhost:4000'),
  },
  build: {
    outDir: 'dist-admin',
    rollupOptions: {
      input: {
        admin: fileURLToPath(new URL('./admin.html', import.meta.url)),
      },
    },
  },
})
