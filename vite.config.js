import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({

   plugins: [react()],
   server: {
      proxy: {
         '/api': {
            target: 'http://13.200.213.41:8081/api/v1',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
         },
      },
   },
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "./"),
      },
   },
});
