import Vue from 'vue'
import App from './App.vue'
import { MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'
import axios from 'axios';

Vue.use(VueMaterial)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
