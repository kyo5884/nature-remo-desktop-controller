<template>
  <div id="app" class="text-primary">
    <div v-for="device in devices" :key="device.id" class="mb-10">
      <Header :device="device" />
      <Appliance
        v-for="appliance in appliances.filter(
          item => item.device.id === device.id
        )"
        :key="appliance.id"
        :appliance="appliance"
      />
    </div>
    <footer
      class="text-xs bg-background flex justify-between items-center fixed bottom-0 inset-x-0 backdrop-blur -mb-px shadow-xl"
    >
      <div class="ml-3"><icon-account class="mr-2" />{{ user.nickname }}</div>
      <div>
        <button
          @click="getValues()"
          title="Refresh"
          class="px-2 py-1 focus:outline-none focus:bg-background-secondary hover:bg-background-secondary"
        >
          <icon-refresh />
        </button>
        <button
          @click="openSettings()"
          title="Settings"
          class="px-2 py-1 focus:outline-none focus:bg-background-secondary hover:bg-background-secondary"
        >
          <icon-cog />
        </button>
      </div>
    </footer>
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
    await this.getValues()
  },
  methods: {
    openSettings() {
      Settings.openInEditor()
    },
    async getValues() {
      try {
        this.user = await Remo.getUser()
        this.devices = await Remo.getDevices()
        this.appliances = await Remo.getAppliances()
      } catch (error) {
        console.error(error)
      }

      // mock values for Remo mini
      // this.devices[0].newest_events.hu = {
      //   val: 68,
      //   created_at: '2004-04-01T00:00:01Z',
      // }
      // this.devices[0].newest_events.il = {
      //   val: 520,
      //   created_at: '2020-02-20T20:20:20Z',
      // }

      console.log(this.devices)
      console.log(this.appliances)
    },
  },
}
</script>
<style>
.material-design-icon {
  pointer-events: none;
}
</style>
