import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroduceView from '../views/IntroduceView.vue';
import DataBindingList from '../views/DataBindingList.vue';// intro 새로 넣어줌
import RenderingView from '../views/RenderingView.vue';// intro 새로 넣어줌
import EventClick from '../views/EventClick.vue';// intro 새로 넣어줌

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { // intro 새로 넣어줌
    path: '/intro',
    name: 'intro',
    component: IntroduceView
  },
  {
    path: '/DataBindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/RenderingView',
    name: 'RenderingView',
    component: RenderingView
  },
  {
    path: '/EventClick',
    name: 'EventClick',
    component: EventClick
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router // 외부에서 사용할 수 있도록 export (자바 php로 치면 public 해준것)
