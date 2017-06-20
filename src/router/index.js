import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/common/Hello'
import Information from '@/components/Information'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    }
  ]
})
