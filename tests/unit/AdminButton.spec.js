import { shallowMount, mount } from '@vue/test-utils'
import AdminButton from '@/components/AdminButton.vue'

let wrapper

const title = 'Save'

beforeEach(() => {
  wrapper = shallowMount(AdminButton, {
    propsData: { title }
  })
})

afterEach(() => wrapper.destroy)

describe('AdminButton.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'New Title'
    const wrapper = shallowMount(AdminButton, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })

  it('has a darker blue background when props.type is primary', () => {
    const button = wrapper.find('button')

    expect(button.classes('bg-blue-600')).toBe(true)
  })

  it('has a lighter blue background when props.type is secondary', () => {
    const wrapper = shallowMount(AdminButton, {
      propsData: { title, type: 'secondary' }
    })

    const button = wrapper.find('button')

    expect(button.classes('bg-blue-400')).toBe(true)
  })

  it('has a white background when props.type is white', () => {
    const wrapper = shallowMount(AdminButton, {
      propsData: { title, type: 'white' }
    })

    const button = wrapper.find('button')

    expect(button.classes('bg-white')).toBe(true)
  })

  it('has a red background when props.type is danger', () => {
    const wrapper = shallowMount(AdminButton, {
      propsData: { title, type: 'danger' }
    })

    const button = wrapper.find('button')

    expect(button.classes('bg-red-600')).toBe(true)
  })

  it('renders content when using the icon slot', () => {
    const wrapper = mount(AdminButton, {
      propsData: { title },
      slots: {
        icon: '<span class="text-white"><svg></svg></span>'
      }
    })

    const svg = wrapper.find('svg')

    expect(svg.exists()).toBe(true)
  })
})
