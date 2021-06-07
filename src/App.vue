<template>
  <div id="app">
    <div v-show="!detailVisible">
      <Header :normal="footerVisible" :toggled.sync="toggled"></Header>
      <router-view class="main-view"></router-view>
    </div>
    <TabBar v-show="footerVisible"></TabBar>
    <ModalDetail v-if="detailVisible" @close="detailVisible=false"></ModalDetail>
    <Overlay :toggled.sync="toggled"></Overlay>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions} from 'vuex'
import * as types from './store/mutation-types'
import Header from './components/Header'
import TabBar from './components/TabBar'
import Overlay from './components/Overlay'
import ModalDetail from './views/ModalDetail'

export default {
  name: 'app',
  components: {ModalDetail, Header, TabBar, Overlay},
  created() {
    // Subscriptions for mutation
    this.$store.subscribe(mutation => {
      switch (mutation.type) {
        case types.SET_FAVORITE:
          this.detailVisible = mutation.payload !== null
          break;
        case types.PRELOAD:
          Indicator.open(this.message)
          break;
        case types.LOADED:
          Indicator.close()
          break;
        case types.ERROR:
          Indicator.close()
          Toast(this.message)
          break;
        default:
          break;
      }
    })
  },
  data() {
    return {
      toggled: false,
      detailVisible: false
    };
  },
  computed: {
    ...mapState(['message', 'detail']),
    ...mapGetters(['visible']),
    footerVisible() {
      return this.$route.matched[0].meta.footerVisible;
    }
  },
  methods: {
    ...mapActions(['getRecipeDetail'])
  }
}
</script>

<style lang="less" scoped>
  .overlay {
    position: fixed;
    top: 40px;
    bottom: 0;
    width: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>
