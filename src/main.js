import Vue from 'vue'
import App from './App.vue'
import Ws from './plugins/ws'
import store from './store'
import { WS_URL } from "./config"
import './assets/styles/index.css';

Vue.config.productionTip = false
Vue.use(Ws, { store, url: WS_URL, interval: 5000 })

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
