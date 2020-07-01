import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import CogOutLine from 'vue-material-design-icons/CogOutline.vue'
Vue.component('icon-cog-outline', CogOutLine)

Vue.config.productionTip = false

new Vue({
  render: function(h) {
    return h(App)
  },
}).$mount('#app')
