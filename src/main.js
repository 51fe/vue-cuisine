import Vue from 'vue'
import router from './router'
import {Spinner, InfiniteScroll, Indicator, Toast} from 'mint-ui'
import Scrollspy from './plugins/vue2-scrollspy'
import store from './store/index'
import App from './App'
import './utils/filter'

import 'mint-ui/lib/spinner/style.css'
import 'mint-ui/lib/indicator/style.css'
import 'mint-ui/lib/toast/style.css'
import './assets/fonts/iconfont.css'
import './styles/app.less'

Vue.component(Spinner.name, Spinner)

Vue.use(InfiniteScroll)
Vue.use(Scrollspy)

window.Indicator = Indicator
window.Toast = Toast

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
