<template>
  <div class="recipe-item" @click="setFavorite({id: recipe.id, title: recipe.title})">
    <div>
      <img class="thumb" :src="recipe.thumb" onerror="this.src='static/img/100x100.png'" alt="" />
    </div>
    <div class="recipe">
      <div class="recipe-title text-clip">{{recipe.title}}</div>
      <div class="small text-clip">{{recipe.sintro|trim}}</div>
      <div class="small grey">
        <span class="mr-16">浏览次数：{{recipe.viewcount}}</span>
        <span>点赞数：{{recipe.likecount}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'RecipeItem',
  props: {
    recipe: {
      type: Object,
      default: function() {
        return {}
      }
    },
  },
  methods: mapMutations(['setFavorite']),
}
</script>

<style lang="less">
  @import '../styles/variables';
  .recipe-item {
    display: flex;
    margin-left: 3vw;

    .thumb {
      width: 20vw;
      height: 20vw;
    }

    .recipe {
      margin-left: 3vw;
      line-height: 6.6666667vw;

      .text-clip {
        width: 73vw;
      }
    }
  }
</style>
