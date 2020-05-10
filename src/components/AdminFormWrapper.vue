<template>
  <div class="bg-white border border-gray-200 rounded shadow-lg max-w-2xl">
    <div class="mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <slot name="form-content"></slot>
    </div>

    <div class="px-4 py-3 bg-gray-100 text-right">
      <slot name="form-actions">
        <admin-button title="Save" />
      </slot>
    </div>
  </div>
</template>

<script>
import AdminButton from '@/components/AdminButton'

export default {
  name: 'admin-form-wrapper',
  components: {
    AdminButton
  }
}
</script>
