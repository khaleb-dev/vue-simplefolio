import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import $ from 'jquery'
import VueTilt from 'vue-tilt.js'
import PortalVue from 'portal-vue'
// import Popper from 'popper.js'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTilt)
Vue.use(PortalVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
