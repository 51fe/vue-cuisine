<template>
  <div class="tags">
    <div class="sidebar">
      <ul class="menu" v-scroll-spy-active v-scroll-spy-link>
        <li :key="cate.tags_id" v-for="(cate, index) in parentCategories" class="menu-item">
          <router-link :to="{params: {index}}">{{cate.catename}}</router-link>
          <i class="icon"></i>
        </li>
      </ul>
    </div>

    <div class="scroll" v-scroll-spy="{data: 'index', offset: 48}">
      <ul :key="cate.id" v-for="cate in categories">
        <li :key="nextCate.id" v-for="nextCate in cate.nextlist">
          <Title :text="nextCate.catename"></Title>
          <section class="section">
            <router-link class="link text-clip"
              :key="tag.tags_id" v-for="tag in nextCate.nextlist"
              :to="{name: 'tagSearch', query: {pid: nextCate.parentId, tags_id: tag.tags_id, title: nextCate.catename}}">
              {{tag.catename}}
            </router-link>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState,} from 'vuex'
import Title from '../components/Title'

export default {
  name: 'Tags',
  components: {Title},
  beforeRouteUpdate(to, from, next) {
    this.$scrollTo(to.params.index)
    next()
  },
  beforeRouteLeave(to, from, next) {
    const str = JSON.stringify(this.getNextCategories(to.query.pid, to.query.title))
    localStorage.setItem('NEXT_CATEGORY', str)
    next()
  },
  data() {
    return {
      index: 0
    }
  },
  created() {
    this.getCategoryList()
    this.$store.subscribe(mutation => {
      if (mutation.type === 'GET_CATEGORY_LIST_SUCCESS') {
        this.$nextTick(()=> {
          this.$scrollTo(this.$route.params.index)
        })
      }
    })
  },

  computed: {
    ...mapState(['categories']),
    ...mapGetters(['parentCategories', 'getNextCategories'])
  },
  methods: mapActions(['getCategoryList'])
};
</script>

<style lang="less">
  @import '../styles/variables';
  .tags {
    .sidebar {
      position: fixed;
      width: 96px;
      top: 48px;
      bottom: 56px;
      overflow-y: auto;
      z-index: 10;
      .menu {
        .menu-item {
          display: block;
          padding-top: 16px;
          white-space: nowrap;
          overflow-y: hidden;
          text-overflow: clip;
          text-align: center;
          a {
            cursor: pointer;
          }
        }
      }
      .active {
        a {
          color: @green;
        }
        .icon {
          display: inline-block;
          position: absolute;
          right: 0;
          margin-top: 6px;
          margin-bottom: 6px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: @green;
        }
      }
    }

    .scroll {
      z-index: 0;
      position: fixed;
      top: 48px;
      bottom: 56px;
      margin-left: 92px;
      padding-bottom: 2.5vw;
      font-size: 1em;
      border-left: solid 1px @grey-light;
      overflow-y: auto;
      .section {
        display: flex;
        flex-wrap: wrap;
        margin-left: 2.5vw;
        align-content: flex-start;
        .link {
          width: 17vw;
          margin-top: 2.5vw;
          margin-right: 2.5vw;
          padding: 4px;
          background-color: #fff;
          border: solid 1px @grey-light;
          border-radius: 3px;
          text-align: center;
          vertical-align: center;
          font-size: small;
        }
      }
    }
  }
</style>
