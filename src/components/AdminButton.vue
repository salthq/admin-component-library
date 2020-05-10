<template>
  <span class="inline-flex rounded-md shadow-sm">
    <button
      type="submit"
      class="inline-flex justify-center py-2 px-4 border text-sm leading-5 font-medium rounded-md  transition duration-150 ease-in-out"
      :class="{
        'text-white border-transparent bg-blue-600 hover:bg-blue-500 focus:ouline-none focus:border-blue-700 focus:shadow-ouline-blue active:bg-blue-700':
          type == 'primary',
        'text-white border-transparent bg-blue-400 hover:bg-blue-300 focus:ouline-none focus:border-blue-600 focus:shadow-ouline-blue active:bg-blue-600':
          type == 'secondary',
        'text-gray-700 bg-white hover:bg-gray-100 focus:ouline-none focus:border-gray-700 focus:shadow-ouline-gray active:bg-gray-100':
          type == 'white',
        'text-white border-transparent bg-red-600 hover:bg-red-500 focus:ouline-none focus:border-red-700 focus:shadow-ouline-red active:bg-red-700':
          type == 'danger'
      }"
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
    },
    type: {
      default: 'primary',
      validator: (value) => {
        return ['danger', 'primary', 'secondary', 'white'].indexOf(value) !== -1
      },
      required: false
    }
  }
}
</script>
