import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Signup from '@/components/signup'
import Test from '@/components/test'
import Profile from '@/components/profile'
import Setinfoadmin from '@/components/Setinfo'
import Checkpoint from '@/components/Checkpoint'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Test
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/setinfoadmin',
      name: 'setinfoadmin',
      component: Setinfoadmin
    },
    {
      path: '/Checkpoint',
      name: 'Checkpoint',
      component: Checkpoint
    }
  ]
})
