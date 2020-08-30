import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/colors.css'

import 'vue-material-design-icons/styles.css'
import Cog from 'vue-material-design-icons/Cog.vue'
import Refresh from 'vue-material-design-icons/Refresh.vue'
import Loading from 'vue-material-design-icons/Loading.vue'
import Account from 'vue-material-design-icons/Account.vue'
import ThermometerLow from 'vue-material-design-icons/ThermometerLow.vue'
import Water from 'vue-material-design-icons/Water.vue'
import LightbulbOn from 'vue-material-design-icons/LightbulbOn.vue'
import WeatherWindy from 'vue-material-design-icons/WeatherWindy.vue'
import SwapVerticalBold from 'vue-material-design-icons/SwapVerticalBold.vue'
Vue.component('icon-cog', Cog)
Vue.component('icon-refresh', Refresh)
Vue.component('icon-loading', Loading)
Vue.component('icon-account', Account)
Vue.component('icon-thermometer-low', ThermometerLow)
Vue.component('icon-water', Water)
Vue.component('icon-lightbulb-on', LightbulbOn)
Vue.component('icon-weather-windy', WeatherWindy)
Vue.component('icon-swap-vertical-bold', SwapVerticalBold)

Vue.config.productionTip = false

new Vue({
  render: function(h) {
    return h(App)
  },
}).$mount('#app')
