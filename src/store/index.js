import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    activeModal: 'example-modal'
  },
  actions: {
    setActiveModal({ commit }, modalID) {
      commit('setActiveModalState', modalID)
    }
  },
  mutations: {
    setActiveModalState(state, modalID) {
      state.activeModal = modalID
    }
  }
})

export default store
