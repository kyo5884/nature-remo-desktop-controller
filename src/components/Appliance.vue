<template>
  <section>
    <h1>{{ appliance.nickname }}</h1>
  </section>
</template>
<script>
export default {
  props: {
    appliance: {
      type: Object,
      required: true,
    },
  },
}
</script>
