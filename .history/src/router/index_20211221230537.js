import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import monitoringData from '@/components/monitoringData'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: home
    },
    {
      path:'/home',
      name: "home",
      component:home
    },
    {
      path:'/monitoringData',
      name: "monitoringData",
      component:monitoringData
    }
  ]
})
