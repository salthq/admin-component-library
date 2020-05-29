<template>
  <admin-form-item-wrapper
    :inputID="inputID"
    :label="label"
    :required="required"
  >
    <div class="rounded-md shadow-sm">
      <textarea
        :id="inputID"
        :name="inputID"
        rows="5"
        class="w-full block border rounded px-4 py-3 h-auto"
        :required="required"
        :readonly="readonly"
        :value="value"
        @input="$emit('input', $event.target.value)"
      ></textarea>
    </div>
  </admin-form-item-wrapper>
</template>

<script>
import AdminFormItemWrapper from '@/components/AdminFormItemWrapper'

export default {
  name: 'admin-form-text-area',
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
    value: {
      type: String,
      required: false
    }
  }
}
</script>
