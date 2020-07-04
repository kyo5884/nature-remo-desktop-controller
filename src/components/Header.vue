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
      <h2
        v-if="device.newest_events.te"
        class="mr-1"
        :title="
          'Room temperature \n' +
            new Date(device.newest_events.te.created_at).toString()
        "
      >
        <icon-thermometer-low class="text-base align-text-top mr-px" />
        <span class="text-xs">{{ device.newest_events.te.val }}</span>
      </h2>
      <h2
        v-if="device.newest_events.hu"
        class="mr-1"
        :title="
          'Room humidity \n' +
            new Date(device.newest_events.hu.created_at).toString()
        "
      >
        <icon-water class="text-base align-text-top mr-px" />
        <span class="text-xs">{{ device.newest_events.hu.val }}</span>
      </h2>
      <h2
        v-if="device.newest_events.il"
        class="mr-1"
        :title="
          'Room brightness \n' +
            new Date(device.newest_events.il.created_at).toString()
        "
      >
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
