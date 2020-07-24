<template>
	<div>
		{{hello}}
		<button @click="handleClick">test</button>
		<img :src="imgSrc" alt="">
		<a href="index.html">index.html</a>
		<a href="other.html">other.html</a>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				hello:'hello other1',
				imgSrc:require('../assets/img/kong1.png').default
			}
		},
		methods:{
			handleClick(){
				this.hello = 'haha other1'
			}
		}
	}
</script>

<style>
</style>
