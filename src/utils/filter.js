import Vue from 'vue'

Vue.filter('trim', function (value, str) {
  if (!value) return ''
  value = value.toString()
  return value.replace(/\<br \/>/g, '')
})
