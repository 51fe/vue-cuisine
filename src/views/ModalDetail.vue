<template>
  <div class="modal-detail">
    <div class="wrapper">
      <div class="page-title text-clip">{{favorite.title}}</div>
      <div class="icon" @click="$emit('close')">
        <i class="iconfont icon-close"></i>
      </div>
    </div>
    <RecipeDetail></RecipeDetail>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import RecipeDetail from './/RecipeDetail'

export default {
  name: 'ModalDetail',
  components: {RecipeDetail},
  computed: mapState(['favorite'])
}
</script>

<style lang="less">
  @import '../styles/variables';
  .modal-detail {
    width: 100%;
    .wrapper {
      display: flex;
      justify-items: center;
      width: 100%;
      margin-right: 5vw;
      height: 48px;
      align-items: center;
      background-color: @white-smoke;
      .icon {
        margin-right: 2.5vw;
        cursor: pointer;
      }
    }
    .recipe-detail {
      position: absolute;
      width: 100%;
      top: 48px;
      bottom: 0;
      overflow-y: auto;
      background-color: @white-smoke;
    }
  }
</style>
