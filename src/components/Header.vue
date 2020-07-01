<template>
  <header class="text-white sticky top-0 inset-x-0 flex flex-col p-3">
    <div class="h-12 flex items-center justify-between flex-1">
      <h1
        class="font-bold p-1 flex-1 overflow-hidden whitespace-no-wrap"
        style="text-overflow: ellipsis;"
      >
        {{ device.name }}
      </h1>
      <button
        @click="openSettings()"
        class="focus:outline-none focus:bg-accent-700 hover:bg-accent-800 rounded p-1"
      >
        <icon-cog-outline />
      </button>
    </div>
    <div class="text-base flex items-center mb-1">
      <h2 v-if="device.newest_events.te" class="mr-3 flex items-center">
        <icon-thermometer-low :size="18" class="mr-1" />
        {{ device.newest_events.te.val }}
      </h2>
      <h2 v-if="device.newest_events.hu" class="mr-3 flex items-center">
        <icon-water-percent :size="21" class="" />
        {{ device.newest_events.hu.val }}
      </h2>
      <h2 v-if="device.newest_events.il" class="mr-3 flex items-center">
        <icon-lightbulb-on :size="18" class="mr-1" />
        {{ device.newest_events.il.val }}
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
  background: linear-gradient(
    var(--color-accent-700) -20%,
    var(--color-accent-800) 120%
  );
}
</style>
