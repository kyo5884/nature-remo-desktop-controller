<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/icon.png" />
    <p style="color: white;">{{ username }}</p>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
