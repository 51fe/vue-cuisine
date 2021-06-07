<template>
  <ul class="tab-bar">
    <li>
      <router-link :to="{name: 'home'}">
        <div class="iconfont icon-recommend"></div>
        推荐
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'tags', params: {index: 2}}">
        <div class="iconfont icon-category"></div>
        菜系
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'tags', params: {index: 4}}">
        <div class="iconfont icon-material"></div>
        食材
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'favorites'}">
        <div class="iconfont icon-favorite"></div>
        收藏
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TabBar',
}
</script>

<style lang="less" scoped>
  @import '../styles/variables';

  .tab-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: solid 1px @grey-light;
    > li {
      flex: 1;
      a {
        display: block;
        padding-top: 6px;
        padding-bottom: 6px;
        color: @grey-black;
        text-align: center;
        &.router-link-active {
          color: @green;
        }
      }
    }
  }

</style>
