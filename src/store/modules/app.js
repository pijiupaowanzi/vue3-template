import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useXXXStore = defineStore('xxx', () => {
	const xxx = ref('xxx')

	return {
		xxx
	}
})
