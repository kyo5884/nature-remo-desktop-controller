<template>
  <header
    class="h-12 px-4 bg-accent-600 text-white flex items-center justify-between sticky top-0 inset-x-0"
  >
    <h1 class="text-lg">Remo</h1>
    <button @click="openSettings()">⚙</button>
  </header>
</template>
<script>
import Settings from '../settings'
export default {
  methods: {
    openSettings() {
      Settings.openInEditor()
    },
  },
}
</script>
