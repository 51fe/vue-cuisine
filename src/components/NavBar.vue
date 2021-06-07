<template>
  <ul class="nav-bar">
    <li v-for="nav in navs" class="nav-bar-item">
      <router-link :to="nav.to" replace exact>{{nav.label}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    navs: {
      type: Array,
      default: function(){
        return []
      }
    },
  },
}
</script>
