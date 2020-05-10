<template>
  <div>
    <h3 class="text-lg leading-6 font-medium text-gray-800 mb-3">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'admin-form-section-title',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
