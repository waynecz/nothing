import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['./components/login/login.vue'], resolve),
      // beforeEnter: (to, from, next) => {
      //   axios.get(host + '/operator/heartbeat', {
      //     withCredentials: true,
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Cache-control': 'no-cache'
      //     },
      //   }).then(res => {
      //     if (res.data.success) {
      //       next('/home/tasks')
      //     } else {
      //       next()
      //     }
      //   })
      // },
    },
    {
      path: '/home',
      name: 'frame',
      component: (resolve) => require(['./components/appFrame.vue'], resolve),
      children: [
        {
          path: 'statistic/:filter',
          name: 'statistic',
          component: (resolve) => require(['./components/manage/statistic.vue'], resolve)
        },
        {
          path: 'activityDetail/:filter',
          name: 'activityDetail',
          component: (resolve) => require(['./components/manage/detail.vue'], resolve)
        },
        {
          path: 'userManage/:filter',
          name: 'userManage',
          component: (resolve) => require(['./components/manage/userManage.vue'], resolve)
        }
      ]
    },
    {
      path: '*',
      redirect: '/home/statistic/all'
    }
  ],
});

export default router