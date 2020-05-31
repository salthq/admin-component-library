<template>
  <fieldset class="mt-6">
    <legend class="text-base font-medium text-gray-900">
      {{ title }}
    </legend>
    <p class="text-sm leading-5 text-gray-500">
      {{ subtitle }}
    </p>
    <div class="my-4" :key="input" v-for="input in inputs">
      <admin-form-radio-button :title="input" :group-name="groupName" />
    </div>
  </fieldset>
</template>

<script>
import AdminFormRadioButton from '@/components/AdminFormRadioButton'

export default {
  name: 'admin-form-radio-group',
  components: {
    AdminFormRadioButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    inputs: {
      type: Array,
      required: true
    }
  },
  computed: {
    groupName() {
      return this.title.toLowerCase().replace(/\s/g, '')
    }
  }
}
</script>
