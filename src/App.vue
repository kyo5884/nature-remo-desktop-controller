<template>
  <div id="app" class="dark text-primary">
    <div v-for="device in devices" :key="device.id">
      <Header :device="device" />
      <div class="m-2">
        <p>{{ username }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Settings from './settings'

import { Cloud } from 'nature-remo'

export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => {
    return {
      username: null,
      devices: [],
    }
  },
  async mounted() {
    const remo = new Cloud(Settings.get('api_token'))
    this.username = (await remo.getUser()).nickname
    this.devices = await remo.getDevices()
    console.log(this.devices)
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
