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
    <path
      :class="`${icon}-path`"
      v-if="icon === 'SortDescIcon'"
      d="M1.70710678 4.70710678c-.39052429.39052429-1.02368927.39052429-1.41421356 0-.3905243-.39052429-.3905243-1.02368927 0-1.41421356l3-3c.39052429-.3905243 1.02368927-.3905243 1.41421356 0l3 3c.39052429.39052429.39052429 1.02368927 0 1.41421356-.39052429.39052429-1.02368927.39052429-1.41421356 0L4 2.41421356 1.70710678 4.70710678z"
    />

    <path
      :class="`${icon}-path`"
      v-if="icon === 'SortAscIcon'"
      d="M6.29289322 9.29289322c.39052429-.39052429 1.02368927-.39052429 1.41421356 0 .39052429.39052429.39052429 1.02368928 0 1.41421358l-3 3c-.39052429.3905243-1.02368927.3905243-1.41421356 0l-3-3c-.3905243-.3905243-.3905243-1.02368929 0-1.41421358.3905243-.39052429 1.02368927-.39052429 1.41421356 0L4 11.5857864l2.29289322-2.29289318z"
    />

    <path
      :class="`${icon}-path`"
      v-if="icon === 'EditIcon'"
      d="M4.3 10.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM6 14h2.59l9-9L15 2.41l-9 9V14zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h6a1 1 0 1 1 0 2H2v14h14v-6z"
    />

    <path
      :class="`${icon}-path`"
      v-if="icon === 'DeleteIcon'"
      fill-rule="nonzero"
      d="M6 4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6H1a1 1 0 1 1 0-2h5zM4 6v12h12V6H4zm8-2V2H8v2h4zM8 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"
    />

    <path
      :class="`${icon}-path`"
      v-if="icon === 'CopyIcon'"
      d="M11.0005 0H2.62549C2.55674 0 2.50049 0.05625 2.50049 0.125V1C2.50049 1.06875 2.55674 1.125 2.62549 1.125H10.3755V11.875C10.3755 11.9438 10.4317 12 10.5005 12H11.3755C11.4442 12 11.5005 11.9438 11.5005 11.875V0.5C11.5005 0.223437 11.2771 0 11.0005 0ZM9.00049 2H1.00049C0.723926 2 0.500488 2.22344 0.500488 2.5V10.7922C0.500488 10.925 0.553613 11.0516 0.647363 11.1453L3.35518 13.8531C3.38955 13.8875 3.42861 13.9156 3.4708 13.9391V13.9688H3.53643C3.59111 13.9891 3.64893 14 3.7083 14H9.00049C9.27705 14 9.50049 13.7766 9.50049 13.5V2.5C9.50049 2.22344 9.27705 2 9.00049 2ZM3.46924 12.3781L2.12393 11.0312H3.46924V12.3781ZM8.37549 12.875H4.46924V10.6562C4.46924 10.3109 4.18955 10.0312 3.84424 10.0312H1.62549V3.125H8.37549V12.875Z"
    />
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
