import Vue from 'vue'
import App from '@/other/App'
window.onload = () => {
	new Vue({
		render: h => h(App)
	}).$mount("#app")
}
