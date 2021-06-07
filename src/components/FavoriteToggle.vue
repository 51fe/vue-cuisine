<template>
  <div class="tool-box">
    <div class="circle favorite" @click="toggle">
      <i class="iconfont icon-favorite" :class="{'icon-unfavorite': toggled}"></i>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'FavoriteToggle',
  data() {
    return {
      toggled: false,
      favorites: JSON.parse(localStorage.getItem('FAVORITES')) || []
    }
  },
  props: {
    favorite: {
      type: Object,
      default: function() {
        return {}
      }
    },
  },
  created() {
    if(this.$route.query.id){
      this.favorite.id = this.$route.query.id
    }
    this.toggled = this.favorites.some(item => item.id == this.favorite.id)
  },

  methods: {
    ...mapMutations(['setFavorite']),
    toggle() {
      this.toggled = !this.toggled
      const index = this.favorites.findIndex(item => item.id == this.favorite.id)
      if (this.toggled) {
        if (index == -1) {
          this.favorites.unshift(this.favorite)
          Toast('添加收藏成功')
        }
      } else {
        this.favorites.splice(index, 1)
        Toast('取消收藏成功')
      }
      localStorage.setItem('FAVORITES', JSON.stringify(this.favorites))
    }
  }
}
</script>
