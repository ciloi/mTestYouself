import Vue from 'vue'
import Router from 'vue-router'
import Entrance from '@/views/index'
import Login from '@/components/login/login'
import Register from '@/components/login/register'
import doExercise from '@/views/exercise/index'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'Entrance',
      component: Entrance
    },{
       path: '/register',
       name: 'Register',
       component: Register
     },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/doExercise',
      name: 'doExercise',
      component: doExercise
    }
  ]
})
