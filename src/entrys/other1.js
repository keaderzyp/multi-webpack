import Vue from 'vue'
import App from '@/other1/App'
window.onload = () => {
	new Vue({
		render: h => h(App)
	}).$mount("#app")
}
