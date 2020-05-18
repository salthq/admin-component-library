<template>
  <div
    v-show="isVisible"
    class="fixed inset-0 flex items-start justify-start px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end z-10"
  >
    <div
      class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto"
    >
      <div class="rounded-lg shadow-xs overflow-hidden">
        <div class="p-4">
          <div class="flex" :class="message ? 'items-start' : 'items-center'">
            <div class="flex-shrink-0">
              <svg
                v-if="status === 'success'"
                class="success-icon h-6 w-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  fill="none"
                ></path>
              </svg>
              <svg
                v-else
                class="failure-icon h-6 w-6 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
              >
                <path
                  d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z"
                />
              </svg>
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm leading-5 font-medium text-gray-900">
                {{ status === 'success' ? 'Success!' : 'Something went wrong' }}
              </p>
              <p
                v-if="message"
                class="message mt-1 text-sm leading-5 text-gray-500"
              >
                {{ message }}
              </p>
            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button
                @click="isVisible = false"
                class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
              >
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin-notification',
  data() {
    return {
      isVisible: this.visible
    }
  },
  props: {
    message: {
      type: String,
      required: false
    },
    status: {
      default: 'success',
      validator: (value) => {
        return ['success', 'failure'].indexOf(value) !== -1
      },
      required: false
    },
    visible: {
      default: false,
      type: Boolean,
      required: false
    }
  }
}
</script>
