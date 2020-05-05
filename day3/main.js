import Vue from 'vue';
import App from './App';
import iView from 'iview';
import 'iview/dist/styles/iview.css';  

Vue.use(iView);
Vue.prototype.$bus = new Vue(); // $on $emit

// 在孙子组件里通知任何一个父亲组件   向上通知
Vue.prototype.$dispatch = function(eventName, value) {
    let parent = this.$parent; // 获取当前组件的父亲
    while(parent) {
        parent.$emit(eventName, value);
        parent = parent.$parent
    }
}

// 向下派发
Vue.prototype.$broadcast = function(eventName, value) {
    // 获取当前组件下所有的孩子
    const broadcast = (children) => {
        children.forEach(child => {
            child.$emit(eventName, value);
            if(child.$children) {
                broadcast(child.$children); // 递归执行孩子
            }
        })
    }
    broadcast(this.$children);
}

new Vue({
    el: '#app',
    render: h => h(App)
})