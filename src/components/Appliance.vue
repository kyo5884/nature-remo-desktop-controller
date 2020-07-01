<template>
  <section class="mb-2">
    <h3 class="px-4 py-2 text-xs font-bold uppercase bg-background">
      {{ appliance.nickname }}
    </h3>
    <div class="flex flex-wrap flex-col items-strech mb-3">
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
  methods: {
    sendSignal(signalId) {
      Remo.sendSignal(signalId)
    },
  },
}
</script>
