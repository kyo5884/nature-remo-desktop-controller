<template>
  <div id="app" class="text-primary">
    <div v-for="device in devices" :key="device.id">
      <Header :device="device" />
      <Appliance
        v-for="appliance in appliances"
        :key="appliance.id"
        :appliance="appliance"
      />
      <footer
        class="text-xs bg-background flex justify-between items-center fixed bottom-0 inset-x-0"
      >
        <div class="m-2">Logged in as {{ user.nickname }}</div>
        <button
          @click="openSettings()"
          class="p-2 focus:outline-none focus:bg-background-secondary hover:bg-background-secondary"
        >
          <icon-cog />
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Appliance from './components/Appliance'

import Remo from './remo'
import Settings from './settings'

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
    if (!Settings.get('api_token')) {
      Settings.set('api_token', '')
      this.openSettings()
      return false
    }

    try {
      this.user = await Remo.getUser()
      this.devices = await Remo.getDevices()
      this.appliances = await Remo.getAppliances()
    } catch (error) {
      console.error(error)
    }

    console.log(this.appliances)

    // mock values for Remo mini
    // this.devices[0].newest_events.hu = { val: 68 }
    // this.devices[0].newest_events.il = { val: 70.5 }
  },
  methods: {
    openSettings() {
      Settings.openInEditor()
    },
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
@media (prefers-color-scheme: dark), (prefers-color-scheme: no-preference) {
  :root {
    --color-primary: #fff;
    --color-secondary: #aaa;
    --color-background: rgba(0, 0, 0, 0.25);
    --color-background-secondary: rgba(255, 255, 255, 0.2);
  }
}
@media (prefers-color-scheme: light) {
  :root {
    --color-primary: #334a52;
    --color-secondary: #555;
    --color-background: rgba(255, 255, 255, 0.25);
    --color-background-secondary: rgba(0, 0, 0, 0.2);
  }
}
</style>
