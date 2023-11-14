import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
	presets: [presetUno(), presetAttributify()],
	content: {
		pipeline: {
			include: [/\.(vue|html)/]
		}
	},
	shortcuts: {
		'text-link': 'text-blue cursor-pointer hover:text-red'
	},
	rules: [
		["uno-padding-20", { padding: "20px" }]
	]
})
