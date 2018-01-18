import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loading: true
    },
    getters: {
      getLoading (state) {
        return state.loading
      }
    },
    mutations: {
      toggleLoading (state) {
        state.loading = !state.loading
      }
    }
  })
}

export default createStore
