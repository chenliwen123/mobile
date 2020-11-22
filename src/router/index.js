import VueRouter from 'vue-router';
import exampleRoutes from './example'

let routes = [
  { 
    path: '/',
    name: 'home',
    component: () => import('../view/index.vue'), },
]
let router = new VueRouter({
  mode:"history",
  routes:[
    ...routes,
    ...exampleRoutes
  ]
  
})

export default router;