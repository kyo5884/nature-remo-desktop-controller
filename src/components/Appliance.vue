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
            class="w-8 h-4 bg-white rounded-full shadow-inner cursor-pointer"
            :class="{
              'bg-accent-700 text-white': acToggle,
              'text-right text-black': !acToggle,
            }"
            style="transition: all .25s ease-out;"
          ></div>
          <div
            class="w-4 h-4 bg-white rounded-full border border-black absolute top-0 left-0"
            :class="{
              'ml-4': acToggle,
            }"
            style="transition: all .25s ease-out;"
          ></div>
        </label>
      </div>
    </h3>
    <div v-if="appliance.type === 'AC'">
      <div v-for="(mode, key) in appliance.aircon.range.modes" :key="key">
        <button
          class="text-xl"
          @click="
            acSettings.mode = key
            updateAirconSettings()
          "
        >
          {{ key }}
        </button>
        <div v-if="key === acSettings.mode">
          <div>
            <input
              type="range"
              :list="`${appliance.id}_${key}_temp`"
              v-model="acSettings.temp"
              :min="mode.temp[0]"
              :max="mode.temp[mode.temp.length - 1]"
              @mouseup="updateAirconSettings()"
            />
            <datalist :id="`${appliance.id}_${key}_temp`">
              <option
                v-for="tick in mode.temp"
                :key="tick"
                :value="tick"
              ></option>
            </datalist>
            {{ acSettings.temp }}
          </div>
          <div>
            <span v-for="(vol, index) in mode.vol" :key="index">
              {{ vol }}
            </span>
          </div>
          <div>
            <span v-for="(dir, index) in mode.dir" :key="index">
              {{ dir }}
            </span>
          </div>
        </div>
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
    if (this.appliance.type === 'AC') {
      this.acSettings = this.appliance.settings

      console.log(this.appliance.aircon.range)
    }
  },
  methods: {
    sendSignal(signalId) {
      Remo.sendSignal(signalId)
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
