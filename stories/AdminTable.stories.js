import AdminTable from '@/components/AdminTable'
import lessonData from './data/lessons.json'

export default {
  title: 'Table',
  components: AdminTable
}

const columns = [
  {
    name: 'id',
    sortable: true
  },
  {
    name: 'title',
    sortable: true
  },
  {
    name: 'duration',
    sortable: true
  }
]

export const Default = () => ({
  components: { AdminTable },
  template: `<admin-table
  :items="items"
  :columns="columns"
  >
      <template v-slot:item="{ item }">
          <td class="border px-4 py-2">
              {{ item.id }}
          </td>
          <td class="border px-4 py-2">
              {{ item.title }}
          </td>
          <td class="border px-4 py-2">
              {{ item.duration }} mins
          </td>
      </template>
  </admin-table>`,
  props: {
    columns: { default: () => columns },
    items: { default: () => lessonData },
  }
})

export const WithPagination = () => ({
    components: { AdminTable },
    template: `<admin-table
    :items="items"
    :columns="columns"
    :paginated="true"
    >
        <template v-slot:item="{ item }">
            <td class="border px-4 py-2">
                {{ item.id }}
            </td>
            <td class="border px-4 py-2">
                {{ item.title }}
            </td>
            <td class="border px-4 py-2">
                {{ item.duration }} mins
            </td>
        </template>
    </admin-table>`,
    props: {
      columns: { default: () => columns },
      items: { default: () => lessonData },
    }
  })

export const WithSearch = () => ({
    components: { AdminTable },
    template: `<admin-table
    :items="items"
    :columns="columns"
    :searchEnabled="true"
    >
        <template v-slot:item="{ item }">
            <td class="border px-4 py-2">
                {{ item.id }}
            </td>
            <td class="border px-4 py-2">
                {{ item.title }}
            </td>
            <td class="border px-4 py-2">
                {{ item.duration }} mins
            </td>
        </template>
    </admin-table>`,
    props: {
      columns: { default: () => columns },
      items: { default: () => lessonData },
    }
  })

  export const WithCustomInitialSort = () => ({
    components: { AdminTable },
    template: `<admin-table
    :items="items"
    :columns="columns"
    :initialSort="initialSort"
    :initialSortDir="initialSortDir"
    >
        <template v-slot:item="{ item }">
            <td class="border px-4 py-2">
                {{ item.id }}
            </td>
            <td class="border px-4 py-2">
                {{ item.title }}
            </td>
            <td class="border px-4 py-2">
                {{ item.duration }} mins
            </td>
        </template>
    </admin-table>`,
    props: {
      columns: { default: () => columns },
      items: { default: () => lessonData },
      initialSort: {default: () => 'duration'},
      initialSortDir: {default: () => 'desc'},

    }
  })
