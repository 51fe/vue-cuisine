<template>
  <section>
    <h3 class="text-center">食材</h3>
    <ul class="food" v-for="(food, index) in foodList" :key="index">
      <li>{{food.foodname}}</li>
      <li>{{food.amount}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'FoodList',
  props: {
    foodList: {
      type: Array,
      default: function() {}
    },
  },
}
</script>

<style lang="less" scoped>
  .food {
    display: flex;
    li {
      flex: 1;
      text-align: center;
    }
  }
</style>
