import * as types from "./mutation-types";

const mutations = {
  [types.GET_RECIPE_LIST_SUCCESS](state, payload = {}) {
    let recommend = state.model
    recommend.list = payload.Recordset
    if (payload.PageData) {
      recommend.pages = payload.PageData.Pages
      recommend.pageNo = payload.PageData.Page
    }
  },

  [types.LOAD_MORER_ECIPES_SUCCESS](state, payload = {}) {
    state.model.list = [...state.model.list, ...payload.Recordset]
    if (payload.PageData) {
      state.model.pageNo = payload.PageData.Page
    }
  },

  [types.GET_RECIPE_DETAIL_SUCCESS](state, payload = {}) {
    // Updates state product
    state.detail = payload.Record
  },
  [types.GET_CATEGORY_LIST_SUCCESS](state, payload = {}) {
    state.categories = payload.Recordset
    if (payload.PageData) {
      state.pageNo = payload.PageData.Page
    }
  },

  [types.SET_FAVORITE](state, payload) {
    state.favorite = payload
  },
  [types.PRELOAD](state) {
    state.message = '正在加载'
    state.code = -1
  },
  [types.LOADED](state) {
    state.message = '加载成功'
    state.code = 1
  },
  [types.ERROR](state, message) {
    state.message = message
    state.code = 0
  },
  [types.PRELOAD_MORE](state) {
    state.model.loadingMore = true
  },
  [types.LOADED_MORE](state) {
    state.model.loadingMore = false
  }
}

export default mutations
