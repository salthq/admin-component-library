<template>
  <div
    class="sm:grid sm:grid-cols-3 sm:gap-4 border-t border-gray-200 sm:items-start sm:pt-5"
  >
    <label
      :for="inputID"
      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2 my-6"
    >
      {{ label }}:
      <span v-if="required" class="text-red-500 text-sm">*</span>
    </label>
    <div class="mt-1 sm:mt-0 sm:col-span-2">
      <slot
        ><input
          :id="inputID"
          :name="inputID"
          class="block w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 sm:text-sm sm:leading-5 transition duration-150 ease-in-out"
      /></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin-form-item-wrapper',
  props: {
    inputID: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: false
    }
  }
}
</script>
