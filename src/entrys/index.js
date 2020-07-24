import Vue from 'vue'
import App from '@/index/App'
import '@/assets/scss/global'
import '@/mock'
window.onload = function(){
    new Vue({
    	render: h => h(App)
    }).$mount("#app")
}
	