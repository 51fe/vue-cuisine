import Vue from 'vue'

Vue.filter('trim', function (value, str) {
  if (!value) return ''
  value = value.toString()
  return value.replace(/\<br \/>/g, '')
})

Vue.filter('thumb2origin', function (value, str) {
  if (!value) return 'static/100x100.png'
  value = value.toString()
  return value.replace('.thumb.jpg', '.jpg')
})
