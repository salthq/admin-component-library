import { mount } from '@vue/test-utils'
import AdminFormCheckboxGroup from '@/components/AdminFormCheckboxGroup.vue'

let wrapper

const title = 'Checkbox Test'
const inputs = [
  {
    title: 'Comments',
    subtitle: 'Get notified when someones posts a comment on a posting'
  },
  {
    title: 'Candidates',
    subtitle: 'Get notified when a candidate applies for a job.'
  },
  {
    title: 'Offers',
    subtitle: 'Get notified when a candidate accepts or rejects an offer.'
  }
]

beforeEach(() => {
  wrapper = mount(AdminFormCheckboxGroup, {
    propsData: { title, inputs }
  })
})

afterEach(() => wrapper.destroy)

describe('AdminFormCheckboxGroup.vue', () => {
  it('renders props.title when passed', () => {
    expect(wrapper.text()).toContain(title)
  })

  it('renders a checkbox for each input value', () => {
    let radio_buttons = wrapper.findAll('input')

    expect(radio_buttons.length).toBe(inputs.length)
  })
})
