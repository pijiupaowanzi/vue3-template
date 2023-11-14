<template>
	<div>我是一个粉刷匠</div>
	<el-button type="primary">已经配置了自动引入</el-button>
</template>

<script setup>
	import { useXXXStore } from '@/store/modules/app.js'

	const xxxStore = useXXXStore()
	console.log(xxxStore)
</script>

<style scoped></style>
