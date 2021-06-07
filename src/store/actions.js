import * as types from "./mutation-types";
import axios from "./axios";

let url = 'getRecipeList.php?pageNo=1&pageSize=10'
const actions = {
  getRecipeList({commit}, params) {
    commit(types.PRELOAD)
    axios.get(url, {params}).then(response => {
      console.log(response.data)
      commit(types.LOADED)
      commit(types.GET_RECIPE_LIST_SUCCESS, {
        ...response.data,
        ...params
      })
    })
  },
  loadMoreRecipes({commit}, params) {
    params.pageNo++;
    if (params.pageNo > 1 && params.pageNo <= params.pages) {
      commit(types.PRELOAD_MORE)
      axios.get(url, {params}).then(response => {
        commit(types.LOADED_MORE)
        commit(types.LOAD_MORER_ECIPES_SUCCESS, response.data)
      })
    }
  },
  searchRecipeList({commit}, param) {
    commit(types.PRELOAD)
    if(param.keyword) {
      url += '&keyword=' + param.keyword
    }
    if(param.orderBy) {
      url += '&orderby=' + param.orderBy
    }
    axios.get(url).then(response => {
      commit(types.LOADED)
      commit(types.SEARCH_RECIPE_SUCCESS, response.data)
    })
  },
  getRecipeDetail({commit}, id) {
    commit(types.PRELOAD)
    axios.get(`getRecipeDetail.php?id=${id}`).then(response => {
      commit(types.LOADED)
      commit(types.GET_RECIPE_DETAIL_SUCCESS, response.data)
    })
  },
  getCategoryList({commit}) {
    commit(types.PRELOAD)
    axios.get('getCategoryList.php').then(response => {
      commit(types.LOADED)
      commit(types.GET_CATEGORY_LIST_SUCCESS, response.data)
    })
  }
}

export default actions;
