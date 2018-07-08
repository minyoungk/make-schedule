import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import _ from 'lodash'
import Schedule from 'vue-schedule'

Vue.config.productionTip = false;

Vue.use(_);
Vue.use(Schedule);

window._ = _;
Vue.prototype.$http = {
    get : function (url,data) {
        return new Promise(function(resolve,reject){
            axios({
                method: 'get',
                url: url,
                params: data
            }).then(res=>{
                return resolve(res);
            }).catch(err=>{
                let errs = String(err);
                return reject(errs);
            })
        });
    }
};

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

