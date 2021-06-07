<template>
  <transition name="fade">
    <div class="tool-box" :class="{'has-footer': visible}">
      <div class="circle" @click="toTop">
        <i class="iconfont icon-top"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import {Easing, scrollWithAnimation} from '../plugins/vue2-scrollspy/animate'

export default {
  name: 'GoTop',
  computed: {
    visible() {
      return this.$route.matched[0].meta.footerVisible;
    }
  },
  methods: {
    toTop() {
      const el = document.querySelector('.recipe-list')
      scrollWithAnimation(el, el.scrollTop, 0, 1000, Easing.Cubic.InOut)
    }
  }
}
</script>

<style lang="less">
  .tool-box {
    &.has-footer {
      bottom: 72px;
    }
    .icon-top {
      font-size: 1.5rem;
      line-height: 16px;
    }
  }
</style>
