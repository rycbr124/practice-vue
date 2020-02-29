import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),//템플릿을 정의하면 내부적으로 render 함수가 실행
}).$mount('#app')//mount : el
