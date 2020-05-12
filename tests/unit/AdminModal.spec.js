import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import AdminModal from '@/components/AdminModal'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('AdminModal.vue', () => {
  let store
  let state
  let actions
  beforeEach(() => {
    state = {
      activeModal: 'example-modal'
    }
    actions = {
      setActiveModal: jest.fn()
    }
    store = new Vuex.Store({
      actions,
      state
    })
  })

  it('dispatches "setActiveModal" when closed', () => {
    const wrapper = shallowMount(AdminModal, {
      store,
      localVue,
      propsData: { id: 'example-modal' }
    })
    const overlay = wrapper.find('#overlay')
    overlay.trigger('click')

    expect(actions.setActiveModal).toHaveBeenCalled()
  })

  it('should be visible if props.id is the same as state.activeModal', () => {
    const wrapper = shallowMount(AdminModal, {
      store,
      localVue,
      propsData: { id: 'example-modal' }
    })

    expect(wrapper.isVisible()).toBe(true)
  })

  it('should not be visible if props.id is different to state.activeModal', () => {
    const wrapper = shallowMount(AdminModal, {
      store,
      localVue,
      propsData: { id: 'different-modal' }
    })

    expect(wrapper.isVisible()).toBe(false)
  })
})
