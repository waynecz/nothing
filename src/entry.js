import Vue from 'vue'
import 'babel-polyfill'
import iView from 'iview'
// import 'iview/dist/styles/iview.css'
import router from './router'
import smooth from './plugins'

Vue.use(iView);
Vue.use(smooth);

const app = new Vue({
  router
}).$mount('#app');

if (environment === 'dev') {
  Vue.config.devtools = true;
}

// 热重载配置
if (module.hot) {
  module.hot.accept();
}
