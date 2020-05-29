<template>
  <admin-form-item-wrapper
    :inputID="inputID"
    :label="label"
    :required="required"
  >
    <div class="max-w-lg rounded-md shadow-sm">
      <input
        :id="inputID"
        :name="inputID"
        :required="required"
        :readonly="readonly"
        :type="type ? type : 'text'"
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="block w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 sm:text-sm sm:leading-5 transition duration-150 ease-in-out"
      />
    </div>
  </admin-form-item-wrapper>
</template>

<script>
import AdminFormItemWrapper from '@/components/AdminFormItemWrapper'

export default {
  name: 'admin-form-input',
  components: {
    AdminFormItemWrapper
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
