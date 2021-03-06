import axios from 'axios'
import store  from '../store'
import * as types from './mutation-types'

// axios gloable setting
axios.defaults.timeout = 20000
axios.defaults.baseURL = 'http://riafan.com/services'

// http response interceptor
axios.interceptors.response.use(data => {
  store.commit(types.LOADED)
  return data
}, error => {
  store.commit(types.ERROR, error)
  return Promise.reject(error)
})

export default axios
