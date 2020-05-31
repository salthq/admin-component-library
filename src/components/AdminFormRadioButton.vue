<template>
  <div class="flex items-center">
    <input
      :id="buttonName"
      :name="groupName"
      type="radio"
      class="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
    />
    <label :for="buttonName" class="ml-3">
      <span class="block text-sm leading-5 font-medium text-gray-700">{{
        title
      }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'admin-form-radio-button',
  props: {
    title: {
      type: String,
      requred: true
    },
    groupName: {
      type: String,
      required: true
    }
  },
  computed: {
    buttonName() {
      return this.title.toLowerCase().replace(/\s/g, '')
    }
  }
}
</script>
