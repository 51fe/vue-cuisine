<template>
  <section class="relative">
    <div class="title">标签</div>
    <ul>
      <li v-for="nav in catList">
        {{nav.catename}}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'RelativeTags',
  props: {
    catList: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .relative {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        padding-bottom: 8px;
        padding-right: 2.5vw;
      }
    }
  }
</style>
