import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    proxy: {
      "/yy": {
        target: "xxx",
        changeOrigin: true, //允许跨域
        rewrite: (path) => path.replace(/^\/yy/, ""),
      },
    }
  },
  server: {
    // true 才可以使用 Network 的形式，以 IP 访问项目
    host: true,
    port: 8080,
    // open: true,
    cors: true, // 跨域设置允许
  },
  base: './', // 设置打包路径
  build: {
		chunkSizeWarningLimit: 2048,
		rollupOptions: {
			output: {
				// 静态资源打包做处理
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
			}
		},
	},
  esbuild: {
    pure: ["console.log"],
    drop: ["debugger"],
    // 打包移除注释
    legalComments: "none"
  },
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "./src/assets/styles/element/index.scss" as *;`
			}
		}
	}
})
