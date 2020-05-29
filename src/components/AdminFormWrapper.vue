<template>
  <form
    class="bg-white shadow sm:rounded-md sm:overflow-hidden"
    @submit.prevent="submit"
  >
    <div class="mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <slot name="content"></slot>
    </div>

    <div class="px-4 py-3 bg-gray-100 text-right">
      <slot name="actions">
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
