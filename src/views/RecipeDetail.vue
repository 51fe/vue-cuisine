<template>
  <div class="recipe-detail" v-show="visible">
    <img :src="detail.images" class="main-img" />
    <Brief :detail="detail"></Brief>
    <section v-html="detail.sintro"></section>
    <FoodList :food-list="detail.foodList"></FoodList>
    <StepList :step-list="detail.stepList"></StepList>
    <section>
      <div class="title">小贴士</div>
      <p>{{detail.stips}}</p>
    </section>
    <RelativeTags :cat-list="detail.catList"></RelativeTags>
    <FavoriteToggle :favorite="favorite"></FavoriteToggle>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import StepList from '../components/StepList'
import FoodList from '../components/FoodList'
import Brief from '../components/Brief'
import Header from '../components/Header'
import FavoriteToggle from '../components/FavoriteToggle'
import RelativeTags from '../components/RelativeTags'

export default {
  name: 'RecipeDetail',
  components: {RelativeTags, FavoriteToggle, FoodList, StepList, Header, Brief},
  created() {
    if (!this.favorite.id) {
      this.id = this.$route.query.id
    } else {
      this.id = this.favorite.id
    }
  },
  data() {
    return {
      id: ''
    }
  },
  computed: {
    ...mapState(['detail', 'favorite']),
    ...mapGetters(['visible'])
  },
  watch: {
    id(newValue) {
      this.getRecipeDetail(newValue)
    }
  },
  methods: {
    ...mapMutations(['setFavorite']),
    ...mapActions(['getRecipeDetail'])
  }
}
</script>

<style lang="less">
  .recipe-detail {
    .main-img {
      width: 100vw;
      object-fit: cover;
    }

    section {
      margin-bottom: 8px;
      background-color: #fff;
      padding: 8px 2.5vw;
      h3 {
        text-align: center;
      }
    }
  }

</style>
