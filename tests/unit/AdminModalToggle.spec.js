import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import AdminModalToggle from '@/components/AdminModalToggle'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('AdminModalToggle.vue', () => {
  let store
  let actions
  beforeEach(() => {
    actions = {
      setActiveModal: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('dispatches "setActiveModal" when clicked', () => {
    const wrapper = shallowMount(AdminModalToggle, {
      store,
      localVue,
      propsData: { modalID: '' }
    })
    wrapper.trigger('click')
    expect(actions.setActiveModal).toHaveBeenCalled()
  })
})
