<template>
  <div class="recipe-list" @scroll="onScroll($event)">
    <div v-infinite-scroll="loadMore"
      infinite-scroll-disabled="model.loadingMore"
      infinite-scroll-distance="48">
      <RecipeItem v-for="(recipe, index) in model.list"
        :key="index" :recipe="recipe">
      </RecipeItem>
    </div>
    <div class="no-data" v-show="model.list.length == 0">
      <p>暂无数据</p>
    </div>
    <p class="page-infinite-loading" v-show="model.loadingMore">
      <mt-spinner type="fading-circle"></mt-spinner>
      加载中...
    </p>
    <GoTop v-show="visible"></GoTop>
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'
import RecipeItem from '../components/RecipeItem'
import GoTop from '../components/GoTop'
import debounce from 'lodash/debounce'

export default {
  name: 'RecipeList',
  components: {GoTop, RecipeItem},
  data() {
    return {
      visible: false
    }
  },
  created() {
    this.getRecipeList(this.$route.query)
  },
  beforeRouteUpdate(to, from, next) {
    this.getRecipeList(to.query).then(() => {
      // scroll to top to fix infinite scroll issue
      document.querySelector('.recipe-list').scrollTop = 0
      next()
    })
  },
  computed: mapState(['model']),
  methods: {
    ...mapActions(['getRecipeList', 'loadMoreRecipes']),
    loadMore() {
      const model = this.model
      this.loadMoreRecipes({
        ...this.$route.query,
        pageNo: model.pageNo,
        pages: model.pages,
      })
    },
    onScroll: debounce(function(event) {
      const container = event.target
      if (container.scrollTop > container.clientHeight * 2) {
        this.visible = true
      } else {
        this.visible = false
      }
    }, 300)
  }
}
</script>

<style lang="less">
  @import '../styles/variables';
  .recipe-list {
    .page-infinite-loading {
      text-align: center;
      height: 48px;
      line-height: 48px;
      margin: 0 auto;
      background-color: @white-ghost;
    }

    .page-infinite-loading div {
      display: inline-block;
      vertical-align: middle;
      margin-right: 2.5vw;
    }

    .no-data {
      display: flex;
      text-align: center;
      height: 72vh;
    }

    .no-data p {
      margin: auto;
    }
  }
</style>
