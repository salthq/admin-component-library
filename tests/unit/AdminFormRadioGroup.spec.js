import { mount } from '@vue/test-utils'
import AdminFormRadioGroup from '@/components/AdminFormRadioGroup.vue'

let wrapper

const title = 'Radio Group Test'
const subtitle = 'Subtitle Test'
const inputs = ['Option 1', 'Option 2', 'Option 3']

beforeEach(() => {
  wrapper = mount(AdminFormRadioGroup, {
    propsData: { title, subtitle, inputs }
  })
})

afterEach(() => wrapper.destroy)

describe('AdminFormRadioGroup.vue', () => {
  it('renders props.title when passed', () => {
    expect(wrapper.text()).toContain(title)
  })

  it('renders props.subtitle when passed', () => {
    expect(wrapper.text()).toContain(subtitle)
  })

  it('renders a radio button for each input value', () => {
    let radio_buttons = wrapper.findAll('input')

    expect(radio_buttons.length).toBe(inputs.length)
  })
})
