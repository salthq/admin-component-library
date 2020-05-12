<template>
  <div @click="toggleModal(modalID)" class="cursor-pointer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'admin-modal-toggle',
  props: {
    modalID: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleModal(modalID) {
      return this.$store.dispatch('setActiveModal', modalID)
    }
  }
}
</script>
