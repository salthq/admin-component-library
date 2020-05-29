<template>
  <admin-form-item-wrapper inputID="file_upload" label="File Upload">
    <div
      class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-500"
    >
      <div class="text-center">
        <svg
          class="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <label class="block mt-1 text-sm text-gray-600" for="myfile">
          <span
            class="cursor-pointer font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >Upload a file</span
          >
          or drag and drop
          <p class="mt-1 text-xs text-gray-500">
            PNG, JPG, GIF up to 10MB
          </p>
        </label>
        <input hidden type="file" id="myfile" name="myfile" />
      </div>
    </div>
  </admin-form-item-wrapper>
</template>

<script>
import AdminFormItemWrapper from '@/components/AdminFormItemWrapper'
export default {
  components: {
    AdminFormItemWrapper
  }
}
</script>
