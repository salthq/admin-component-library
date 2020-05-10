import { shallowMount } from '@vue/test-utils'
import AdminFormInput from '@/components/AdminFormInput.vue'

let wrapper

const label = 'First Name'
const inputID = 'first_name'
const value = 'first_name'

beforeEach(() => {
  wrapper = shallowMount(AdminFormInput, {
    propsData: { label, inputID, value }
  })
})

afterEach(() => wrapper.destroy)

describe('AdminFormInput.vue', () => {
  it('renders props.label when passed', () => {
    expect(wrapper.text()).toMatch(label)
  })

  test("The label 'for' attribute is the same as input name", () => {
    const label = wrapper.find('label')
    const input = wrapper.find('input')

    const labelFor = label.attributes('for')
    const inputName = input.attributes('name')

    expect(labelFor == inputName).toBe(true)
  })

  test('The required span is shown when props.required is set to true', () => {
    const wrapper = shallowMount(AdminFormInput, {
      propsData: {
        label,
        inputID,
        value,
        required: true
      }
    })

    const requiredAsterisk = wrapper.find('.text-red-500')

    expect(requiredAsterisk.text()).toMatch('*')
  })

  test('The input field is readonly when props.readonly is set to true', () => {
    const wrapper = shallowMount(AdminFormInput, {
      propsData: {
        label,
        inputID,
        value,
        readonly: true
      }
    })

    const input = wrapper.find('input')

    expect(input.attributes('readonly')).toBe('readonly')
  })
})
