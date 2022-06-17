import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import 'remixicon/fonts/remixicon.css'
import router from './router'
import {store} from './store'


axios.defaults.baseURL = 'https://sip.gram.tj/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
new Vue({
  router,
  axios,
  store,
  render: h => h(App),
}).$mount('#app')
