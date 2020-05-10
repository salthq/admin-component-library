<template>
  <span class="inline-flex rounded-md shadow-sm">
    <button
      type="submit"
      class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:ouline-none focus:border-blue-700 focus:shadow-ouline-blue active:bg-blue-700 transiation duration-150 ease-in-out"
    >
      {{ title }}
    </button>
  </span>
</template>

<script>
export default {
  name: 'admin-button',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
