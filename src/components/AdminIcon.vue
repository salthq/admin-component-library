<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="dynamicSize"
    :height="dynamicSize"
    :viewBox="dynamicViewBox"
    preserveAspectRatio="xMidYMid meet"
    stroke-width="0.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather"
    :class="icon"
  >
    <keep-alive>
      <component :is="dynamicIcon" :size="dynamicSize"></component>
    </keep-alive>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
      default: 'x'
    },
    size: {
      type: Number,
      required: false,
      default: 40
    },
    viewBox: {
      type: String,
      required: false,
      default: '0 0 32 32'
    }
  },
  computed: {
    dynamicIcon: function() {
      return () => import('@/components/svg/' + this.icon)
    },
    dynamicViewBox: function() {
      return this.viewBox
    },
    dynamicSize: function() {
      return this.size
    }
  }
}
</script>
<style>
svg {
  @apply inline-block;
  @apply stroke-current;
  @apply fill-current;
}
</style>
