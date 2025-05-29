import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), mkcert()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
        @use "sass:color";
        @use "@/styles/_variables.scss";
        @use "@/styles/_mixins.scss";`,
			},
		},
	},
	resolve: {
		alias: {
			"@/": `${path.resolve(__dirname, "src")}/`,
			"@api": path.resolve(__dirname, "src/api"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "src/Components"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@layout": path.resolve(__dirname, "src/Layout"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@shared": path.resolve(__dirname, "src/shared"),
			"@constants": path.resolve(__dirname, "src/shared/constants"),
			"@data": path.resolve(__dirname, "src/shared/data"),
			"@types": path.resolve(__dirname, "src/shared/types"),
			"@store": path.resolve(__dirname, "src/store"),
			"@slices": path.resolve(__dirname, "src/store/slices"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@utils": path.resolve(__dirname, "src/utils"),
		},
	},
	server: {
		host: true,
	},
	build: {
		outDir: "dist",
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
	base: "/",
});
