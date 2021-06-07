<template>
  <div class="recommend">
    <NavBar class="fixed" :navs="navs"></NavBar>
    <router-view class="sub-view" v-show="visible"></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

export default {
  name: 'Home',
  components: {NavBar, Header},
  data() {
    const tags_id = this.$route.query.tags_id;
    return {
      navs: [{
        label: '早餐',
        to: {name: 'recipes', query: {tags_id: '1940'}},
      }, {
        label: '午餐',
        to: {name: 'recipes', query: {tags_id: '1937'}},
      }, {
        label: '晚餐',
        to: {name: 'recipes', query: {tags_id: '1938'}},
      }, {
        label: '夜宵',
        to: {name: 'recipes', query: {tags_id: '1939'}},
      }]
    }
  },
  created() {
    if (!this.$route.query.tags_id) {
      const hour = new Date().getHours()
      let tagsId = '1940'
      if (12 <= hour && hour < 18) {
        tagsId = '1937'
      } else if (18 <= hour && hour < 23) {
        tagsId = '1938'
      } else if (0 <= hour && hour < 6) {
        tagsId = '1939'
      }
      this.$route.query.tags_id = tagsId
    }
  },
  computed: mapGetters(['visible'])
}
</script>
