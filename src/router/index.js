import {createRouter,createWebHashHistory} from 'vue-router'
import List from '@/pages/ConentList'
import Detail from '@/pages/ContentDetail'

const routes = [
    { path: '/', component: List },
    { path: '/detail/:id', component: Detail },
  ]

  const router = createRouter({
    history:createWebHashHistory(),
    routes
  })

export default router;