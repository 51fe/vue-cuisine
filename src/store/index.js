import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    code: -1,
    message: '',
    categories: [],
    detail: {},
    model: {
      list: [],
      pages: 0,
      pageNo: 0,
      loadingMore: false,
    },
    favorites: [],
    favorite: {}
  },
  actions,
  mutations,
  getters
})

export default store
