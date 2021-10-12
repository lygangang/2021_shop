// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/iconfont/iconfont.css'

// 将一张loading图片加载进来
import loading from './common/imgs/loading.gif'

// 加载mockServer
import './mock/mockServer.js'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
