import Vue from 'vue'
import App from './App.vue'
//导入boosterap样式
import 'bootstrap/dist/css/bootstrap.css'
//导入样式
import './assets/css/index.css'
import router from './rouyters'
import axios from 'axios'
axios.defaults.baseURL='http://localhost:3001/'
Vue.prototype.a=axios;
new Vue({
  router,
  el: '#app',
  render: h => h(App)
 
})
