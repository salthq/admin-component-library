import { mount } from '@vue/test-utils'
import AdminFormTextArea from '@/components/AdminFormTextArea.vue'

let wrapper

const label = 'About'
const inputID = 'about'

beforeEach(() => {
  wrapper = mount(AdminFormTextArea, {
    propsData: { label, inputID }
  })
})

afterEach(() => wrapper.destroy)

describe('AdminFormTextArea.vue', () => {
  it('renders props.label when passed', () => {
    expect(wrapper.text()).toMatch(label)
  })

  test("The label 'for' attribute is the same as textarea name", () => {
    const label = wrapper.find('label')
    const textarea = wrapper.find('textarea')

    const labelFor = label.attributes('for')
    const textareaName = textarea.attributes('name')

    expect(labelFor == textareaName).toBe(true)
  })

  test('The required span is shown when props.required is set to true', () => {
    const wrapper = mount(AdminFormTextArea, {
      propsData: {
        label,
        inputID,
        required: true
      }
    })

    const requiredAsterisk = wrapper.find('.text-red-500')

    expect(requiredAsterisk.text()).toMatch('*')
  })

  test('The textarea field is readonly when props.readonly is set to true', () => {
    const wrapper = mount(AdminFormTextArea, {
      propsData: {
        label,
        inputID,
        readonly: true
      }
    })

    const textarea = wrapper.find('textarea')

    expect(textarea.attributes('readonly')).toBe('readonly')
  })
})
