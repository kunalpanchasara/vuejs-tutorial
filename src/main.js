import Vue from 'vue'
import App from './App.vue'


export const eventBus = new Vue();

Vue.config.productionTip = false

Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('')
})

Vue.filter('wrap', function (value, begin, end) {
  return begin + value + end
})

Vue.filter('readMore', function (text, length, suffix) {
  return text.substring(0, length) + suffix;
});

new Vue({
  render: h => h(App),
}).$mount('#app')
