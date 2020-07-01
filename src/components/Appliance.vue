<template>
  <section class="mb-1">
    <h3 class="text-xs px-3 py-1 font-bold uppercase bg-background">
      {{ appliance.nickname }}
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
  methods: {
    sendSignal(signalId) {
      Remo.sendSignal(signalId)
    },
  },
}
</script>
