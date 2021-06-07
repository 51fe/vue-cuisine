<template>
  <div class="title">
    <div class="line"></div>
    <div class="text">{{text}}</div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="less">
  @import '../styles/variables';

  .title {
    display: flex;
    margin-top: 5vw;
    margin-bottom: 2.5vw;
    margin-right: 2.5vw;
    align-items: center;
    .line {
      flex: 1;
      border-bottom: 1px solid @grey-light;
    }
    .text {
      color: @grey-dark;
      margin-left: 2.5vw;
      margin-right: 2.5vw;
    }
  }
</style>
