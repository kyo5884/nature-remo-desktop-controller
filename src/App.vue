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

    // mock values for Remo mini
    // this.devices[0].newest_events.hu = { val: 68 }
    // this.devices[0].newest_events.li = { val: 70.5 }
  },
}
</script>

<style>
:root {
  --color-accent-100: #e2f8ff;
  --color-accent-200: #c4f1ff;
  --color-accent-300: #a8eaff;
  --color-accent-400: #8be3fe;
  --color-accent-500: #6edcff;
  --color-accent-600: #25caff;
  --color-accent-700: #00a6db;
  --color-accent-800: #006e92;
  --color-accent-900: #003748;
}
.dark {
  --color-primary: #fff;
  --color-secondary: #aaa;
}
.light {
  --color-primary: #000;
  --color-secondary: #555;
}
</style>
