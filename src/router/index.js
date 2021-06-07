import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import RecipeList from '../views/RecipeList'
import RecipeDetail from '../views/RecipeDetail'
import Tags from '../views/Tags';
import Favorite from '../views/Favorites'
import GlobalSearch from '../views/GlobalSearch'
import TagSearch from '../views/TagSearch'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'recipes',
      children: [{
        path: 'recipes',
        name: 'recipes',
        component: RecipeList
      }],
      meta: {
        footerVisible: true
      }
    },
    {
      path: '/recipe',
      name: 'recipeDetail',
      component: RecipeDetail,
      meta: {
        footerVisible: false
      }
    },
    {
      path: '/tags/:index',
      name: 'tags',
      component: Tags,
      meta: {
        footerVisible: true
      }
    },
    {
      path: '/tag-search',
      name: 'tagSearch',
      component: TagSearch,
      redirect:  {name: 'searchTags'},
      children: [{
        path: '/search',
        name: 'searchTags',
        component: RecipeList
      }],
      meta: {
        footerVisible: false
      }
    },
    {
      path: '/global-search',
      name: 'globalSearch',
      component: GlobalSearch,
      redirect: {name: 'search'},
      children: [{
        path: '/search/global',
        name: 'search',
        component: RecipeList
      }],
      meta: {
        footerVisible: false
      }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorite,
      meta: {
        footerVisible: true
      }
    }
  ]
});

export default router
