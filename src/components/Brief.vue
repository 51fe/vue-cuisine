<template>
  <ul class="brief">
    <li class="item">
      <i class="iconfont icon-minute"></i>
      <div class="text">
        <div>{{detail.zb_datetime}}</div>
        <div class="grey">准备时间</div>
      </div>
    </li>
    <li class="item">
      <i class="iconfont icon-hour"></i>
      <div class="text">
        <div>{{detail.zz_datetime}}</div>
        <div class="grey">制作时间</div>
      </div>
    </li>
    <li class="item">
      <i class="iconfont icon-man"></i>
      <div class="text">
        <div>{{detail.yc_number}}</div>
        <div class="grey">用餐人数</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Brief',
  props: {
    detail: {
      type: Object,
      default: function() {
      }
    },
  },
}
</script>

<style lang="less">
  @import '../styles/variables';
  .brief {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 2.5vm;
    border-bottom: solid 1px @grey-light;
    background-color: white;
    font-size: small;
    .iconfont {
      font-size: 3vh;
      vertical-align: middle;
    }
    .item {

    }

    .text {
      display: inline-block;
      margin-left: 1.25vw;
      vertical-align: middle;
    }
  }
</style>
