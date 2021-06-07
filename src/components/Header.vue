<template>
  <div class="header" :class="{'green': noTitle}">
    <div class="search-wrapper normal" v-if="noTitle">
      <i class="iconfont icon-search"></i>
      <input :placeholder="placeholder"
        class="border" @click="startSearch" />
    </div>
    <div class="search-wrapper" :class="{'reading': !searching}"  v-else>
      <div @click="goBack" class="ml-8">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="page-title text-clip" v-if="!searching">{{title}}</div>
      <div class="search-wrapper" v-else>
        <input :placeholder="placeholder"
          class="no-border" v-focus
          v-model.trim="keyword" @keyup.enter="search" />
      </div>
      <div class="search" @click="startSearch">
        <i class="iconfont icon-search"></i>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      keyword: '',
      placeholder: '菜名、食材'
    }
  },
  props: {
    normal: {
      type: Boolean,
      default: false
    },
    toggled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    searching: {
      get: function() {
        return this.toggled;
      },
      set: function(val) {
        this.$emit('update:toggled', val)
      }
    },
    title: function() {
      let q = this.$route.query
      let title = q.title;
      if(this.$route.name === 'searchTags') {
        title += '分类'
      }
      return title || q.keyword + '分类'
    },
    noTitle: function(){
      return this.normal && !this.searching
    }
  },

  methods: {
    ...mapActions(['searchRecipeList']),
    goBack() {
      if (this.searching) {
        this.searching = false
      } else {
        this.$router.back()
      }
    },
    startSearch() {
      this.searching = true
      this.keyword = ''
      this.$emit('demo', true)
    },
    search() {
      if (this.keyword) {
        this.$router.push({
          name: 'globalSearch', query: {
            keyword: this.keyword,
            orderby: this.$route.query.orderby
          }
        })
      }
      this.searching = false;
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../styles/variables';

  .header {
    width: 100%;
    .page-title {
      width: 100%;
      font-size: 1rem;
      text-align: center;
      display: block;
      line-height: 1;
    }
    .search-wrapper {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      &.reading {
        margin-top: 8px
      }
      input {
        display: block;
        width: 100%;
        height: 32px;
        box-sizing: border-box;
        outline: 0;
        padding: 8px 12px;
        appearance: none;
        border: none;
      }
      &.normal {
        position: relative;
        width: 90%;
        height: 48px;
        margin-left: auto;
        margin-right: auto;
        .iconfont {
          position: absolute;
          left: 8px;
          top: 8px;
          bottom: 8px;
        }
        input {
          padding-left: 32px;
          border: 1px solid @grey-light;
          border-radius: 4px;
        }
        .search {
          margin-right: 0;
        }
      }
    }

    .search {
      margin-right: 2.5vw;
    }

    .iconfont {
      cursor: pointer;
      line-height: 32px;
    }
  }

  .green {
    background-color: @green;
  }

</style>
