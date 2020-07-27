import Vue from 'vue'
import App from '@/index/App'
import '@/assets/scss/global'
import '@/mock'

function Dec(){
  return function(target,key,des){
    return des;
  }
}
function Prop(value){
  return function(target,key,des){
    console.log(target,key,des)
    target[key] = value;
    return target;
  }
}
@Dec()
class Test{
  @Prop("ssd")
	_name = 'aaa'
	constructor() {

	}
	set name(str){
		this._name = str
	}
	get name(){
		return this._name
	}
}
const t = new Test();

console.log(t.name)
window.onload = function(){
    new Vue({
    	render: h => h(App)
    }).$mount("#app")
}
