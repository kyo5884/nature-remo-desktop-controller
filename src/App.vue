<template>
  <div id="app" class="dark text-primary">
    <Header />
    <div class="m-2">
      <img alt="Vue logo" src="./assets/icon.png" />
      <p>{{ username }}</p>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Settings from './settings'

import { Cloud } from 'nature-remo'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
  },
  data: () => {
    return {
      username: null,
    }
  },
  async mounted() {
    const remo = new Cloud(Settings.get('api_token'))
    this.username = (await remo.getUser()).nickname
  },
}
</script>

<style>
.dark {
  --color-primary: #fff;
  --color-secondary: #aaa;
}
.light {
  --color-primary: #000;
  --color-secondary: #555;
}
</style>
