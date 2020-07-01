<template>
  <header class="text-white sticky top-0 inset-x-0 flex flex-col p-3">
    <div class="h-12 flex items-center justify-between flex-1">
      <h1 class="text-base font-bold p-1">{{ device.name }}</h1>
      <button
        @click="openSettings()"
        class="focus:outline-none focus:bg-accent-700 hover:bg-accent-600 rounded p-1"
      >
        <icon-cog-outline />
      </button>
    </div>
    <div class="flex items-center">
      <h2 class="text-4xl px-1 flex items-center">
        <icon-thermometer-low :size="32" />{{ device.newest_events.te.val }}
      </h2>
    </div>
  </header>
</template>
<script>
import Settings from '../settings'
export default {
  props: {
    device: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openSettings() {
      Settings.openInEditor()
    },
  },
}
</script>
<style scoped>
header {
  background: linear-gradient(var(--color-accent-700), var(--color-accent-800));
}
</style>
