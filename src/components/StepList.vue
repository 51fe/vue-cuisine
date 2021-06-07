<template>
  <section>
    <h3 class="text-center">做法</h3>
    <div class="step" v-for="(step, index) in stepList" :key="index">
      <p>{{index + 1 + '. ' + step.msgdesc|trim}}</p>
      <div>
        <img class="responsive-img" :src="step.images">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StepList',
  props: {
    stepList: {
      type: Array,
      default: function(){}
    },
  },
}
</script>
