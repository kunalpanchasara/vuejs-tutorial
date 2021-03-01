import Vue from 'vue'
import App from './App.vue'
import clickedMixin from './mixins/clickedMixin'

export const eventBus = new Vue();

Vue.config.productionTip = false

Vue.mixin(clickedMixin)

new Vue({
  render: h => h(App),
}).$mount('#app')
