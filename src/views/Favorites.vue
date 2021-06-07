<template>
  <div class="favorites">
    <ul v-if="favorites.length > 0">
      <li v-for="(item, index) in favorites">
        <div class="text-clip">
          <router-link :to="{name: 'recipeDetail', query: item}">
            {{item.title}}
          </router-link>
        </div>
        <div @click="removeFavorite(index)">
          <i class="iconfont icon-unfavorite"></i>
        </div>
      </li>
    </ul>
    <div class="no-data" v-else>
      <p>暂无数据</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favorites',
  data() {
    return {
      favorites: JSON.parse(localStorage.getItem('FAVORITES')) || []
    }
  },
  methods: {
    removeFavorite(index) {
      this.favorites.splice(index, 1)
      localStorage.setItem('FAVORITES', JSON.stringify(this.favorites))
    }
  }
}
</script>

<style lang="less">
  .favorites {
    top: 64px;
    overflow: auto;
    ul {
      padding: 0 5vw;
      li {
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
      }
    }
  }
</style>
