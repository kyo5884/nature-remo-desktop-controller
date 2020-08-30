<template>
  <div>
    <h3>
      {{ appliance.nickname }}
      <label class="block relative cursor-pointer">
        <input type="checkbox" class="hidden" v-model="acToggle" />
        <div
          class="w-8 h-4 bg-background-secondary rounded-full shadow-inner border-black border-opacity-25 border"
          :class="{
            'bg-accent-700 text-white': acToggle,
            'text-right text-black': !acToggle,
          }"
          style="transition: all .25s ease-out;"
        ></div>
        <div
          class="w-4 h-4 bg-white rounded-full border border-black border-opacity-50 absolute top-0 left-0"
          :class="{
            'ml-4': acToggle,
          }"
          style="transition: all .25s ease-out;"
        ></div>
      </label>
    </h3>
    <div class="text-xs flex flex-wrap pl-4">
      <label class="flex py-1 w-1/2" title="Operation Mode">
        <icon-cog />
        <select v-model="acSettings.mode" @change="updateAirconSettings()">
          <option
            v-for="(mode, key) in appliance.aircon.range.modes"
            :key="key"
          >
            {{ key }}
          </option>
        </select>
      </label>
      <label class="flex py-1 w-1/2" title="Temperature">
        <icon-thermometer-low />
        <select v-model="acSettings.temp" @change="updateAirconSettings()">
          <option
            v-for="value in appliance.aircon.range.modes[acSettings.mode].temp"
            :key="value"
          >
            {{ value }}
          </option>
        </select>
      </label>
      <label class="flex py-1 w-1/2" title="Air volume">
        <icon-weather-windy />
        <select v-model="acSettings.vol" @change="updateAirconSettings()">
          <option
            v-for="value in appliance.aircon.range.modes[acSettings.mode].vol"
            :key="value"
          >
            {{ value }}
          </option>
        </select>
      </label>
      <label class="flex py-1 w-1/2" title="Air direction">
        <icon-swap-vertical-bold />
        <select v-model="acSettings.dir" @change="updateAirconSettings()">
          <option
            v-for="value in appliance.aircon.range.modes[acSettings.mode].dir"
            :key="value"
          >
            {{ value }}
          </option>
        </select>
      </label>
    </div>
  </div>
</template>
<script>
import Remo from '../remo'

export default {
  props: {
    appliance: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      acSettings: null,
    }
  },
  computed: {
    acToggle: {
      get() {
        return this.acSettings.button !== 'power-off'
      },
      set(value) {
        if (value) this.acSettings.button = ''
        else this.acSettings.button = 'power-off'
        this.updateAirconSettings()
      },
    },
  },
  created() {
    this.loadSettings()
  },
  beforeUpdate() {
    this.loadSettings()
  },
  methods: {
    loadSettings() {
      this.acSettings = this.appliance.settings
    },
    async updateAirconSettings() {
      const response = await Remo.updateAirconSettings(this.appliance.id, {
        temperature: this.acSettings.temp,
        operation_mode: this.acSettings.mode,
        air_volume: this.acSettings.vol,
        air_direction: this.acSettings.dir,
        button: this.acSettings.button,
      })
      this.acSettings = response
    },
  },
}
</script>
<style scoped>
select {
  @apply flex-1 bg-transparent ml-1;
}
select:nth-of-type(1) {
  @apply mr-3;
}
</style>
