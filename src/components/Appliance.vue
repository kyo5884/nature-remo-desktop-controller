<template>
  <section class="mb-2">
    <h3 class="px-4 py-2 text-xs font-bold uppercase bg-background">
      {{ appliance.nickname }}
    </h3>
    <div class="flex flex-wrap px-2 py-1 mb-2">
      <button
        class="rounded-full w-16 h-16 text-xs m-1 flex-shrink-0 text-primary bg-background focus:outline-none focus:bg-background-secondary hover:bg-background-secondary"
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
  methods: {
    sendSignal(signalId) {
      Remo.sendSignal(signalId)
    },
  },
}
</script>
