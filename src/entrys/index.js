import Vue from 'vue'
import App from '@/index/App'
import '@/assets/scss/global'
import $ from 'jquery';
console.log($)
import(/* webpackChunkName: "mock" */'mockjs').then((Mock) => {
	new Vue({
		render: h => h(App)
	}).$mount("#app")
})
