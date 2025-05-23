import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import path from "path";

export default defineConfig({
	plugins: [react(), mkcert()],
	server: {
		host: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@api": path.resolve(__dirname, "src/api"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "src/components"),
			"@constants": path.resolve(__dirname, "src/constants"),
			"@data": path.resolve(__dirname, "src/data"),
			"@helpers": path.resolve(__dirname, "src/helpers"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@layout": path.resolve(__dirname, "src/Layout"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@store": path.resolve(__dirname, "src/store"),
			"@types": path.resolve(__dirname, "src/types"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@validations": path.resolve(__dirname, "src/validations"),
		},
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use "sass:color";
          @use "@/helpers/variables" as *;
          @use "@/helpers/mixins" as *;
        `,
			},
		},
	},
	build: {
		outDir: "dist",
		sourcemap: true,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom", "react-router-dom"],
				},
				chunkFileNames: "assets/[name]-[hash].js",
				entryFileNames: "assets/[name]-[hash].js",
				assetFileNames: "assets/[name]-[hash].[ext]",
			},
		},
	},
});
