import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),

    // Transform .js files as .jsx
    {
      name: "transform-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) { 
          return null;
        }

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic", // Ensure automatic JSX transformation
        });
      },
    },
  ],

  server: {
    proxy: {
      "/api": {
        target: "http://192.168.0.110:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },

  // Ensure .js files are treated as .jsx for optimization
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
