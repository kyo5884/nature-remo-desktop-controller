import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import CogOutLine from 'vue-material-design-icons/CogOutline.vue'
import ThermometerLow from 'vue-material-design-icons/ThermometerLow.vue'
Vue.component('icon-cog-outline', CogOutLine)
Vue.component('icon-thermometer-low', ThermometerLow)

Vue.config.productionTip = false

new Vue({
  render: function(h) {
    return h(App)
  },
}).$mount('#app')
