<template>
  <admin-form-item-wrapper
    :inputID="inputID"
    :label="label"
    :required="required"
    ><multi-select
      v-model="value"
      :options="options"
      :searchable="false"
      :close-on-select="true"
      :show-labels="false"
      placeholder="Pick a value"
      @input="$emit('selected-option', value)"
    ></multi-select
  ></admin-form-item-wrapper>
</template>

<script>
import MultiSelect from 'vue-multiselect'

import AdminFormItemWrapper from '@bit/advantagelearn.admin-component-library.admin-form-item-wrapper'

export default {
  components: {
    MultiSelect,
    AdminFormItemWrapper
  },
  props: {
    inputID: {
      Type: String,
      required: true
    },
    label: {
      Type: String,
      required: true
    },
    options: {
      Type: Array,
      required: true
    },
    required: {
      Type: Boolean
    }
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>