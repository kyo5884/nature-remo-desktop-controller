import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import 'vue-material-design-icons/styles.css'
import Cog from 'vue-material-design-icons/Cog.vue'
import ThermometerLow from 'vue-material-design-icons/ThermometerLow.vue'
import Water from 'vue-material-design-icons/Water.vue'
import LightbulbOn from 'vue-material-design-icons/LightbulbOn.vue'
Vue.component('icon-cog', Cog)
Vue.component('icon-thermometer-low', ThermometerLow)
Vue.component('icon-water', Water)
Vue.component('icon-lightbulb-on', LightbulbOn)

Vue.config.productionTip = false

new Vue({
  render: function(h) {
    return h(App)
  },
}).$mount('#app')
