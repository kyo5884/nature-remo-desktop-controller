<template>
  <section class="p-2 border-b border-secondary">
    <h3 class="text-xs font-bold uppercase">{{ appliance.nickname }}</h3>
    <button
      v-for="signal in appliance.signals"
      :key="signal.id"
      @click="sendSignal(signal.id)"
    >
      {{ signal.name }}
    </button>
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
