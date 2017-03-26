import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TodoApp from '@/components/TodoApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/todo',
      name: 'TodoApp',
      component: TodoApp
    }
  ]
})
