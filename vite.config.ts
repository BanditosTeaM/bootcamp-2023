import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@api': path.resolve(__dirname, './src/api'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@providers': path.resolve(__dirname, './src/providers'),
			'@store': path.resolve(__dirname, './src/store'),
			'@temp': path.resolve(__dirname, './src/temp'),
			'@utils': path.resolve(__dirname, './src/utils')
		}
	}
})
