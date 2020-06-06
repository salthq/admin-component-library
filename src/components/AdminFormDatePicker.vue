<template>
  <admin-form-item-wrapper
    :inputID="inputID"
    :label="label"
    :required="required"
  >
    <div class="max-w-lg rounded-md shadow-sm">
      <datepicker
        class="block w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 sm:text-sm sm:leading-5 transition duration-150 ease-in-out"
        placeholder="Click to select a date"
        v-model="dateValue"
        @selected="$emit('input', dateValue)"
      />
    </div>
  </admin-form-item-wrapper>
</template>

<script>
import AdminFormItemWrapper from '@/components/AdminFormItemWrapper'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'admin-form-date-picker',
  components: {
    AdminFormItemWrapper,
    Datepicker
  },
  data() {
    return {
      dateValue: this.value ?? ''
    }
  },
  props: {
    inputID: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    readonly: {
      type: Boolean,
      required: false
    },
    required: {
      type: Boolean,
      required: false
    },
    type: {
      validator: (value) => {
        return ['date', 'email', 'number', 'text'].indexOf(value) !== -1
      },
      required: false
    },
    value: {
      type: String,
      required: false
    }
  }
}
</script>

<style>
.vdp-datepicker input {
  width: 100%;
}
</style>
