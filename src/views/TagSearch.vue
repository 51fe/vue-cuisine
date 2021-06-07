<template>
  <div class="tag-search">
    <div class="nav-bars">
      <NavBar class="compact" :navs="orderNavs"></NavBar>
      <div class="wrapper">
        <ul class="nav-bar compact" v-scroll-nav="{id: $route.query.tags_id}">
          <li class="nav-bar-item" v-for="cate in nextList" :id="cate.tags_id">
            <router-link
              :to="{query: {pid: $route.query.pid, tags_id: cate.tags_id, title: $route.query.title, orderby: $route.query.orderby}}"
              exact replace>
              {{cate.catename}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view class="sub-view" v-show="visible"></router-view>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import RecipeList from './RecipeList';
import Header from '../components/Header';
import NavBar from '../components/NavBar'

export default {
  name: 'TagSearch',
  components: {NavBar, Header, RecipeList},
  created() {
    if (!this.$route.query.orderby) {
      this.$route.query.orderby = 'created'
    }
    if (this.category.nextlist === undefined) {
      this.getCategoryList()
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.orderNavs.forEach(item => {
      item.to.query.tags_id = to.query.tags_id
    })
    next()
  },
  data() {
    let query = this.$route.query
    return {
      orderNavs: [{
        label: '最新',
        to: {query: {...query, orderby: 'created'}},
      }, {
        label: '最热',
        to: {query: {...query, orderby: 'viewcount'}},
      }, {
        label: '最优',
        to: {query: {...query, orderby: 'likecount'}},
      }],
      category: JSON.parse(localStorage.getItem('NEXT_CATEGORY')) || {}
    }
  },
  computed: {
    ...mapState(['categories']),
    ...mapGetters(['visible', 'getNextCategories']),
    nextList() {
      const cate = this.getNextCategories(this.$route.query.pid, this.$route.query.title)
      if (cate) {
        return cate.nextlist
      }
      return this.category.nextlist
    }
  },
  methods: mapActions(['getCategoryList']),
  directives: {
    scrollNav: {
      bind: function(el, binding, vnode) {
        const id = binding.value.id

        setTimeout(() => {
          const item = el.querySelector('li[id="' + id + '"]')
          const left = item.getBoundingClientRect().left
          // vw to px
          el.scrollLeft = left - Math.round(2.5 * el.clientWidth / 100);
        }, 400)
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import '../styles/variables';

  .tag-search {
    bottom: 0;
    .nav-bars {
      padding-left: 2.5vw;
      border-bottom: solid 1px @grey-light;
      .wrapper {
        padding-top: 3px;
        padding-bottom: 4px;
      }
    }
    .sub-view {
      top: 64px;
      overflow-y: auto;
    }
  }
</style>
