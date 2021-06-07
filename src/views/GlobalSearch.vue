<template>
  <div class="global-search">
    <NavBar class="fixed" :navs="navs"></NavBar>
    <router-view class="sub-view" v-show="visible"></router-view>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import RecipeList from './RecipeList'
import Header from '../components/Header';
import NavBar from '../components/NavBar'

export default {
  name: 'GlobalSearch',
  components: {NavBar, Header, RecipeList},
  created() {
    if (!this.$route.query.orderby) {
      this.$route.query.orderby = 'created'
    }
  },
  beforeRouteUpdate(to, from, next) {
    // update keyword
    this.navs.forEach(item => {
      item.to.query.keyword = to.query.keyword
    })
    next()
  },
  data() {
    const keyword = this.$route.query.keyword;
    return {
      navs: [{
        label: '最新',
        to: {name: 'search', query: {keyword, orderby: 'created'}},
      }, {
        label: '最热',
        to: {name: 'search', query: {keyword, orderby: 'viewcount'}},
      }, {
        label: '最新',
        to: {name: 'search', query: {keyword, orderby: 'likecount'}},
      }]
    }
  },
  computed: mapGetters(['visible'])
}
</script>
<style>
  .global-search {
    bottom: 0;
  }
</style>
