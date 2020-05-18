import { shallowMount } from '@vue/test-utils'
import AdminNotification from '@/components/AdminNotification'

describe('AdminNotification.vue', () => {
  it('is visible when props.isVisible is set to true', () => {
    const wrapper = shallowMount(AdminNotification, {
      propsData: {
        visible: true
      }
    })

    expect(wrapper.isVisible()).toBe(true)
  })

  it('renders props.message when passed', () => {
    const successMessage = 'Your request succeeded'

    const wrapper = shallowMount(AdminNotification, {
      propsData: {
        message: successMessage
      }
    })
    const message = wrapper.find('.message')
    expect(message.text()).toMatch(successMessage)
  })

  it('shows the success icon if props.status is equal to "success"', () => {
    const wrapper = shallowMount(AdminNotification, {
      propsData: {
        status: 'success'
      }
    })
    const successIcon = wrapper.find('.success-icon')
    expect(successIcon.exists()).toBe(true)
  })

  it('shows the failure icon if props.status is equal to "failure"', () => {
    const wrapper = shallowMount(AdminNotification, {
      propsData: {
        status: 'failure'
      }
    })
    const failureIcon = wrapper.find('.failure-icon')
    expect(failureIcon.exists()).toBe(true)
  })

  it('sets the visible data point to false when the close button is clicked', () => {
    const wrapper = shallowMount(AdminNotification)

    const closeButton = wrapper.find('button')

    closeButton.trigger('click')

    expect(wrapper.vm.visible).toBe(false)
  })
})
