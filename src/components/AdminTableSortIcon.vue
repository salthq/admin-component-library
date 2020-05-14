<template>
  <span class="cursor-pointer inline-flex items-center">
    <svg
      class="ml-2 flex-no-shrink stroke-0"
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      viewBox="0 0 8 14"
    >
      <path
        :class="descClass"
        d="M1.70710678 4.70710678c-.39052429.39052429-1.02368927.39052429-1.41421356 0-.3905243-.39052429-.3905243-1.02368927 0-1.41421356l3-3c.39052429-.3905243 1.02368927-.3905243 1.41421356 0l3 3c.39052429.39052429.39052429 1.02368927 0 1.41421356-.39052429.39052429-1.02368927.39052429-1.41421356 0L4 2.41421356 1.70710678 4.70710678z"
      />
      <path
        :class="ascClass"
        d="M6.29289322 9.29289322c.39052429-.39052429 1.02368927-.39052429 1.41421356 0 .39052429.39052429.39052429 1.02368928 0 1.41421358l-3 3c-.39052429.3905243-1.02368927.3905243-1.41421356 0l-3-3c-.3905243-.3905243-.3905243-1.02368929 0-1.41421358.3905243-.39052429 1.02368927-.39052429 1.41421356 0L4 11.5857864l2.29289322-2.29289318z"
      />
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    colKey: {
      type: String,
      required: true
    },
    currentSort: {
      type: String,
      required: true
    },
    currentSortDir: {
      type: String,
      required: true
    }
  },

  computed: {
    /**
     * The CSS class to apply to the ascending arrow icon
     */
    ascClass() {
      if (this.isSorted && this.currentSortDir == 'desc') {
        return 'fill-80'
      }

      return 'fill-60'
    },

    /**
     * The CSS class to apply to the descending arrow icon
     */
    descClass() {
      if (this.isSorted && this.currentSortDir == 'asc') {
        return 'fill-80'
      }

      return 'fill-60'
    },

    /**
     * Determine whether this column is being sorted
     */
    isSorted() {
      return this.currentSort == this.colKey
    }
  }
}
</script>

<style>
.fill-60 {
  fill: #bacad6;
}

.fill-80 {
  fill: #7c858e;
}
</style>
