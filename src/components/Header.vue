<template>
  <header class="text-white sticky top-0 inset-x-0 flex flex-col p-2">
    <div class="text-sm h-5 flex items-center justify-between">
      <h1
        class="font-bold p-1 flex-1 overflow-hidden whitespace-no-wrap"
        style="text-overflow: ellipsis;"
      >
        {{ device.name }}
      </h1>
      <button
        @click="openSettings()"
        class="focus:outline-none focus:bg-accent-700 hover:bg-accent-700 rounded p-1"
      >
        <icon-cog />
      </button>
    </div>
    <div class="flex">
      <h2 v-if="device.newest_events.te" class="mr-1">
        <icon-thermometer-low class="text-base align-text-top mr-px" />
        <span class="text-xs">{{ device.newest_events.te.val }}</span>
      </h2>
      <h2 v-if="device.newest_events.hu" class="mr-1">
        <icon-water class="text-base align-text-top mr-px" />
        <span class="text-xs">{{ device.newest_events.hu.val }}</span>
      </h2>
      <h2 v-if="device.newest_events.il" class="mr-1">
        <icon-lightbulb-on class="text-base align-text-top mr-px" />
        <span class="text-xs">{{ device.newest_events.il.val }}</span>
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
