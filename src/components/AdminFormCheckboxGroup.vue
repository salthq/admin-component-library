<template>
  <fieldset class="flex flex-col">
    <legend class="text-base font-medium text-gray-900">
      {{ title }}
    </legend>
    <div class="mt-4">
      <div class="mb-3" :key="input.title" v-for="input in inputs">
        <admin-form-checkbox-button
          :title="input.title"
          :subtitle="input.subtitle"
        />
      </div>
    </div>
  </fieldset>
</template>

<script>
import AdminFormCheckboxButton from '@/components/AdminFormCheckboxButton'

export default {
  name: 'admin-form-checkbox-group',
  components: {
    AdminFormCheckboxButton
  },
  props: {
    title: {
      type: String,
      required: false
    },
    inputs: {
      type: Array,
      required: true
    }
  }
}
</script>
