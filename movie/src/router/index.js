import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import MovieView from '@/views/MovieView'
import RandomView from '@/views/RandomView'
import WatchListView from '@/views/WatchListView'
import DetailView from '@/views/DetailView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/movies',
    name: 'movie',
    component: MovieView,
  },
  {
    path: '/random',
    name: 'random',
    component: RandomView,
  },
  {
    path: '/watch-list',
    name: 'watch_list',
    component: WatchListView,
  },
  {
    path: '/movies/:id',
    name: 'movie_detail',
    component: DetailView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
