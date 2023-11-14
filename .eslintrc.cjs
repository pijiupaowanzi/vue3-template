module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
	],
	parser: 'vue-eslint-parser',
	rules: {
		'vue/multi-word-component-names': 'off',
		'no-empty-function': 'warn',
		'vue/no-unused-vars': 'warn',
		'no-unused-vars': 'warn',
    "no-debugger": "warn",
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always',
					normal: 'never',
					component: 'always'
				},
				svg: 'always',
				math: 'always'
			}
		],
		'eqeqeq':'warn',
		'no-dupe-args': 'warn',
		'no-dupe-keys': 'warn',
		'no-self-assign': 'warn',
		'no-func-assign': 'warn'
	}
}
