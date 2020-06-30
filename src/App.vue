<template>
  <div id="app" class="dark text-primary">
    <img alt="Vue logo" src="./assets/icon.png" />
    <p>{{ username }}</p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Cloud } from 'nature-remo'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => {
    return {
      username: null,
    }
  },
  async mounted() {
    const remo = new Cloud('ACCESS_TOKEN')
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
