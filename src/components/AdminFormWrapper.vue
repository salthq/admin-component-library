<template>
  <form
    class="bg-white border border-gray-200 rounded shadow-lg max-w-2xl"
    @submit.prevent="submit"
  >
    <div class="mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <slot name="form-content"></slot>
    </div>

    <div class="px-4 py-3 bg-gray-100 text-right">
      <slot name="form-actions">
        <admin-button @click="$emit('submit')" type="primary" title="Save" />
      </slot>
    </div>
  </form>
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
