<template>
  <header
    class="text-white sticky backdrop-blur bg-accent-700 bg-opacity-75 top-0 inset-x-0 flex flex-col p-2 z-30 shadow-lg border-b border-accent-800 border-opacity-25"
  >
    <h1
      class="h-6 text-sm font-bold p-1 overflow-hidden whitespace-no-wrap"
      style="text-overflow: ellipsis;"
    >
      {{ device.name }}
    </h1>
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
export default {
  props: {
    device: {
      type: Object,
      required: true,
    },
  },
}
</script>
