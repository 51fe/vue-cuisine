<template>
  <transition name="bounce">
    <div class="overlay" v-show="visible" @click="visible=false"></div>
  </transition>
</template>

<script>
export default {
  name: 'Overlay',
  props: {
    toggled: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    visible: {
      get: function(){
        return this.toggled;
      },
      set: function(val) {
        this.$emit('update:toggled', val)
      }
    }
  }
}
</script>
