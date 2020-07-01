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
      acToggle: null,
    }
  },
  mounted() {
    if (this.appliance.type === 'AC') {
      this.acToggle = this.appliance.settings.button !== 'power-off'
    }
  },
  methods: {
    sendSignal(signalId) {
      Remo.sendSignal(signalId)
    },
  },
  watch: {
    acToggle(newValue) {
      if (newValue === false)
        Remo.updateAirconSettings(this.appliance.id, {
          button: 'power-off',
        })
    },
  },
}
</script>
