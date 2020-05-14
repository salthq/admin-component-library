<template>
  <div class="flex flex-col">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ">
      <div class="flex py-4 justify-end" v-if="searchEnabled">
        <div class="relative flex items-center ">
          <input
            type="search"
            class="form-control h-10 px-5 w-64 rounded-md shadow pr-24"
            v-model="searchString"
            placeholder="Search..."
          />
          <span
            v-show="searchString"
            @click="searchString = ''"
            class="absolute right-0 mr-2 text-red-500 cursor-pointer transition duration-100 ease-in-out"
            >X</span
          >
        </div>
      </div>
      <div
        class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg"
      >
        <table class="min-w-full">
          <thead class="text-left">
            <th
              :key="column.name"
              v-for="column in columns"
              @click="column.sortable ? sortColumn(column.name) : null"
              class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
            >
              <div :class="{ 'cursor-pointer': column.sortable }" class="flex">
                {{ column.name }}
                <admin-table-sort-icon
                  v-if="column.sortable"
                  :colKey="column.name"
                  :currentSort="currentSort"
                  :currentSortDir="currentSortDir"
                />
              </div>
            </th>
          </thead>
          <tbody class="bg-white">
            <tr :key="item.id" v-for="item in sortedItems">
              <slot name="item" v-bind:item="item" />
            </tr>
          </tbody>
        </table>
        <nav
          v-if="items.length && paginated"
          class="bg-gray-100 flex justify-between items-center w-full py-3"
        >
          <button
            class="btn btn-link py-3 px-4 text-80"
            v-show="currentPage > 1"
            @click="prevPage"
          >
            Previous
          </button>
          <span class="text-sm text-80 px-4">
            {{ resourceCount }}
          </span>
          <button
            class="btn btn-link py-3 px-4 text-80"
            v-show="finalPage"
            @click="nextPage"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import AdminTableSortIcon from '@/components/AdminTableSortIcon'

export default {
  name: 'admin-table',
  components: {
    AdminTableSortIcon
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    paginated: {
      type: Boolean,
      default: false
    },
    pageSize: {
      type: Number,
      default: 5
    },
    initialSort: {
      type: String
    },
    initialSortDir: {
      type: String
    },
    searchEnabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentPage: 1,
      currentSort: '',
      currentSortDir: '',
      searchString: ''
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage * this.pageSize < this.items.length)
        this.currentPage++
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--
    },
    sortColumn(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = s
    }
  },
  mounted() {
    this.currentSort = this.initialSort
      ? this.initialSort
      : this.columns[0].name
    this.currentSortDir = this.initialSortDir ? this.initialSortDir : 'asc'
  },
  computed: {
    finalPage() {
      return (
        this.sortedItems.length + this.pageSize * (this.currentPage - 1) >=
        this.pageSize * this.currentPage
      )
    },
    resourceCount() {
      const first = this.pageSize * (this.currentPage - 1)

      return (
        this.items.length &&
        `${first + 1}-${first + this.sortedItems.length} of ${
          this.filteredItems.length
        }`
      )
    },
    filteredItems() {
      return this.items.filter((item) => {
        return item.title
          .toLowerCase()
          .includes(this.searchString.toLowerCase())
      })
    },
    sortedItems() {
      // eslint-disable-next-line
      let sortedItems = this.filteredItems.sort((a, b) => {
        let modifier = 1
        if (this.currentSortDir === 'desc') modifier = -1
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier
        return 0
      })

      return this.paginated
        ? sortedItems.filter((row, index) => {
            let start = (this.currentPage - 1) * this.pageSize
            let end = this.currentPage * this.pageSize
            if (index >= start && index < end) return true
          })
        : sortedItems
    }
  }
}
</script>
