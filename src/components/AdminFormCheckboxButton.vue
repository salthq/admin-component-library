<template>
  <div class="relative flex items-start">
    <div class="absolute flex items-center h-5">
      <input
        :id="buttonName"
        type="checkbox"
        class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
      />
    </div>
    <div class="pl-8 text-sm leading-5">
      <label :for="buttonName" class="font-medium text-gray-700">{{
        title
      }}</label>
      <p class="text-gray-500">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin-form-checkbox-button',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    }
  },
  computed: {
    buttonName() {
      return this.title.toLowerCase().replace(/\s/g, '')
    }
  }
}
</script>
