import Vue from 'vue'
import Router from 'vue-router'

 // 引入路由组件文件夹下的组件
 import Msite from '../pages/Msite/Msite.vue'
 import Search from '../pages/Search/Search.vue'
 import Order from '../pages/Order/Order.vue'
 import Profile from '../pages/Profile/Profile.vue'

 import Login from '../pages/Login/Login'

Vue.use(Router)

export default new Router({
  method:'history',
  routes: [

    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path: '/order',
      component: Order,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/Login',
      component: Login
    },

  ]
})
