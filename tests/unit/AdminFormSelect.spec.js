import { mount } from '@vue/test-utils'
import AdminFormSelect from '@/components/AdminFormSelect.vue'

let wrapper

const label = 'Province'
const inputID = 'province'
const options = [
  'Eastern Cape',
  'Free State',
  'Gauteng',
  'KwaZulu-Natal',
  'Limpopo',
  'Mpumalanaga',
  'North West Province',
  'Northern Cape',
  'Western Cape'
]

beforeEach(() => {
  wrapper = mount(AdminFormSelect, {
    propsData: { label, inputID, options }
  })
})

afterEach(() => wrapper.destroy)

describe('AdminFormSelect.vue', () => {
  it('renders props.label when passed', () => {
    expect(wrapper.text()).toMatch(label)
  })

  test('The required span is shown when props.required is set to true', () => {
    const wrapper = mount(AdminFormSelect, {
      propsData: {
        label,
        inputID,
        options,
        required: true
      }
    })

    const requiredAsterisk = wrapper.find('.text-red-500')

    expect(requiredAsterisk.text()).toMatch('*')
  })

  // TODO: Add more tests for the multi-select functionality
})
