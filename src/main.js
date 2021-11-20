import Vue from 'vue'
import axios from 'axios'
import Vuesax from 'vuesax'
import ElementUI from 'element-ui'
import App from './App.vue'
import api from "./api";
import './components/index'

Vue.prototype.$service = axios
Vue.prototype.$api = api

Vue.config.productionTip = false

import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax,{})

import 'element-ui/lib/theme-chalk/index.css';
import '@iconify/vue2/dist/iconify'
Vue.use(ElementUI)


new Vue({
  render: h => h(App),
}).$mount('#app')
