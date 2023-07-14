import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    cors: false,
    // host: "0.0.0.0",
    // proxy:  {
    //   '/api': {
    //     target: 'http://sky.bigbrain-studio.com/ocs/v2.php/apps/serverinfo/api/v1/info',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },   
  }
})
