<template>
	<div>
		{{hello}}
		<button @click="handleClick">test</button>
		<img :src="imgSrc" alt="">
		<a href="index.html">index.html</a>
		<a href="other1.html">other1.html</a>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				hello:'hello other',
				imgSrc:require('../assets/img/kong1.png').default
			}
		},
		methods:{
			handleClick(){
				this.hello = 'haha other'
			}
		}
	}
</script>

<style scoped="scoped">
	button{
		display: inline-flex;
	}
</style>
