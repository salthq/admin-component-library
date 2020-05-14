import { mount } from '@vue/test-utils'

import AdminTableSortIcon from '@/components/AdminTableSortIcon'

const colKey = 'title'
let currentSort = 'title'
let currentSortDir = 'asc'

describe('AdminTableSortIcon.vue', () => {
  test('The "isSorted" computed property is true when props.colKey is equal to the currently sorted column', () => {
    mount(AdminTableSortIcon, {
      propsData: {
        colKey: colKey,
        currentSort: currentSort,
        currentSortDir: currentSortDir
      }
    })

    expect(AdminTableSortIcon.computed.isSorted()).toBe(true)
  })

  test('The "isSorted" computed property is false when props.colKey is not equal to the currently sorted column', () => {
    let currentSort = 'id'
    mount(AdminTableSortIcon, {
      propsData: {
        colKey: colKey,
        currentSort: currentSort,
        currentSortDir: currentSortDir
      }
    })

    expect(AdminTableSortIcon.computed.isSorted()).toBe(true)
  })

  test('The "ascClass" computed property returns "fill-60" when "isSorted" is true and props.currentSortDir is "asc"', () => {
    mount(AdminTableSortIcon, {
      propsData: {
        colKey: colKey,
        currentSort: currentSort,
        currentSortDir: currentSortDir
      }
    })

    expect(AdminTableSortIcon.computed.ascClass()).toEqual('fill-60')
  })

  test('The "descClass" computed property returns "fill-60" when "isSorted" is true and props.currentSortDir is "desc"', () => {
    let currentSortDir = 'desc'
    mount(AdminTableSortIcon, {
      propsData: {
        colKey: colKey,
        currentSort: currentSort,
        currentSortDir: currentSortDir
      }
    })

    expect(AdminTableSortIcon.computed.descClass()).toEqual('fill-60')
  })
})
