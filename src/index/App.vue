<template>
	<div>
		{{hello}}
		<button @click="handleClick">test</button>
		<img :src="imgSrc" alt="">
		<a href="other.html">other.html</a>
		<a href="other1.html">other1.html</a>
	</div>
</template>

<script>
    import $ from 'jquery'
	export default {
		data(){
			return {
				hello:'hello index',
				imgSrc:require('../assets/img/kong1.png').default
			}
		},
		methods:{
			handleClick(){
                $.ajax({
                    url:'/getList',
                    method:'get',
                    dataType:'json',
                    success(res){
                        console.log(res)
                    }
                })
				this.hello = 'haha'
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	img{
		display: flex;
	}
</style>
