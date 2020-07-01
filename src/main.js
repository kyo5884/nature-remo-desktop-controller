import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import CogOutLine from 'vue-material-design-icons/CogOutline.vue'
import ThermometerLow from 'vue-material-design-icons/ThermometerLow.vue'
import WaterPercent from 'vue-material-design-icons/WaterPercent.vue'
import LightbulbOn from 'vue-material-design-icons/LightbulbOn.vue'
Vue.component('icon-cog-outline', CogOutLine)
Vue.component('icon-thermometer-low', ThermometerLow)
Vue.component('icon-water-percent', WaterPercent)
Vue.component('icon-lightbulb-on', LightbulbOn)

Vue.config.productionTip = false

new Vue({
  render: function(h) {
    return h(App)
  },
}).$mount('#app')
