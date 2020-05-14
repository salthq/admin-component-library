import { mount } from '@vue/test-utils'

import AdminTable from '@/components/AdminTable'

let wrapper

const rowData = [
  {
    title: 'Revising the basics of differentiation',
    id: 'les001',
    duration: 2
  },
  {
    title: 'Differentiating using the chain rule - Part 1 of 2',
    id: 'les002',
    duration: 12
  },
  {
    title: 'Differentiating using the chain rule - Part 2 of 2',
    id: 'les003',
    duration: 5
  },

  {
    title: 'Differentiating using the chain rule - Practice exercise',
    id: 'les004',
    duration: 2
  },
  {
    title: 'Differentiating using the product rule',
    id: 'les005',
    duration: 7
  },
  {
    title: 'Differentiating using the quotient rule',
    id: 'les006',
    duration: 13
  }
]

const columnData = [
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

describe('AdminTableSortIcon.vue', () => {
  it('has the same amount of columns as objects in columnsData', () => {
    wrapper = mount(AdminTable, {
      propsData: {
        items: rowData,
        columns: columnData
      }
    })

    expect(wrapper.findAll('th').length).toEqual(columnData.length)
  })

  it('has the same amount of rows as objects in rowData', () => {
    wrapper = mount(AdminTable, {
      propsData: {
        items: rowData,
        columns: columnData
      }
    })

    expect(wrapper.findAll('tr').length).toEqual(rowData.length)
  })

  it('shows a search box if props.searchEnabled is true', () => {
    wrapper = mount(AdminTable, {
      propsData: {
        items: rowData,
        columns: columnData,
        searchEnabled: true
      }
    })

    const searchBox = wrapper.find('.searchBox');

    expect(searchBox.exists()).toBe(true)
  })

  it('shows pagination if props.pagination is true', () => {
    wrapper = mount(AdminTable, {
      propsData: {
        items: rowData,
        columns: columnData,
        paginated: true
      }
    })

    const pagination = wrapper.find('nav');

    expect(pagination.exists()).toBe(true)
  })
})
