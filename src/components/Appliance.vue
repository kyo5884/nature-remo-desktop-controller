<template>
  <section class="mb-1 select-none">
    <h3
      class="text-xs px-3 py-1 font-bold uppercase bg-background flex justify-between items-center"
    >
      {{ appliance.nickname }}
      <div v-if="appliance.type === 'AC'">
        <input
          :id="'toggle_' + appliance.id"
          type="checkbox"
          class="hidden"
          v-model="acToggle"
        />
        <label :for="'toggle_' + appliance.id" class="block relative">
          <div
            class="w-8 h-4 bg-background-secondary rounded-full shadow-inner cursor-pointer border-black border-opacity-25 border"
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
      </div>
    </h3>
    <div v-if="appliance.type === 'AC'" class="text-xs flex flex-col">
      <div class="flex mx-4 my-1">
        <icon-cog />
        <select v-model="acSettings.mode" @change="updateAirconSettings()">
          <option
            v-for="(mode, key) in appliance.aircon.range.modes"
            :key="key"
          >
            {{ key }}
          </option>
        </select>
        <icon-thermometer-low />
        <select v-model="acSettings.temp" @change="updateAirconSettings()">
          <option
            v-for="value in appliance.aircon.range.modes[acSettings.mode].temp"
            :key="value"
          >
            {{ value }}
          </option>
        </select>
      </div>
      <div class="flex mx-4 my-1">
        <icon-weather-windy />
        <select v-model="acSettings.vol" @change="updateAirconSettings()">
          <option
            v-for="value in appliance.aircon.range.modes[acSettings.mode].vol"
            :key="value"
          >
            {{ value }}
          </option>
        </select>
        <icon-swap-vertical-bold />
        <select v-model="acSettings.dir" @change="updateAirconSettings()">
          <option
            v-for="value in appliance.aircon.range.modes[acSettings.mode].dir"
            :key="value"
          >
            {{ value }}
          </option>
        </select>
      </div>
    </div>
    <div class="flex flex-wrap flex-col items-strech">
      <button
        class="text-xs py-1 px-4 text-left text-primary focus:outline-none focus:bg-background-secondary hover:bg-background-secondary"
        v-for="signal in appliance.signals"
        :key="signal.id"
        @click="sendSignal(signal.id)"
      >
        {{ signal.name }}
      </button>
    </div>
  </section>
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
  data: () => {
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
    sendSignal(signalId) {
      Remo.sendSignal(signalId)
    },
    loadSettings() {
      if (this.appliance.type === 'AC') {
        this.acSettings = this.appliance.settings

        console.log(this.appliance.aircon.range)
      }
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
      console.log(this.acSettings)
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
