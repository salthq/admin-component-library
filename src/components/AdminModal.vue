<template>
  <div
    :id="id"
    v-show="activeModal === id"
    class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center z-10"
  >
    <div
      id="overlay"
      class="fixed inset-0 transition-opacity"
      @click="closeModal"
    >
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <div
      @click.stop
      class="bg-white rounded-lg px-4 pt-5 pb-4 shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'admin-modal',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted: function() {
    document.addEventListener('keydown', (e) => {
      if (this.show && e.keyCode == 27) {
        this.closeModal()
      }
    })
  },
  computed: {
    ...mapState(['activeModal'])
  },
  methods: {
    closeModal() {
      this.$store.dispatch('setActiveModal', '')
    }
  }
}
</script>
