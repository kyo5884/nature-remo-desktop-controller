<template>
  <div id="app" class="dark text-primary">
    <div v-for="device in devices" :key="device.id">
      <Header :device="device" />
      <Appliance
        v-for="appliance in appliances"
        :key="appliance.id"
        :appliance="appliance"
        @sendSignal="event => sendSignal(event)"
      />
      <footer class="text-xs p-2 text-center">
        logged in as {{ user.nickname }}
      </footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Appliance from './components/Appliance'

import Remo from './remo'

export default {
  name: 'App',
  components: {
    Header,
    Appliance,
  },
  data: () => {
    return {
      user: {},
      devices: [],
      appliances: [],
    }
  },
  async mounted() {
    this.user = await Remo.getUser()
    this.devices = await Remo.getDevices()
    this.appliances = await Remo.getAppliances()
    console.log(this.appliances)

    // mock values for Remo mini
    // this.devices[0].newest_events.hu = { val: 68 }
    // this.devices[0].newest_events.il = { val: 70.5 }
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
