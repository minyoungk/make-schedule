import Vue from 'vue'
import App from './App'
import router from './router'

import _ from 'lodash'
import Schedule from 'vue-schedule'

Vue.config.productionTip = false

Vue.use(_);
Vue.use(Schedule);

window._ = _;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
