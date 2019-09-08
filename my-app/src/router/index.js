import Vue from 'vue'
import Router from 'vue-router'
// 1.引用
import Movie from '../pages/movie'
import Broad from '../pages/broad'
import Group from '../pages/group'
import Book from '../pages/book'
import Douban from '../pages/douban'
import Seek from '../pages/seek'
import Zhuce from '../pages/zhuce'
import Denglu from '../pages/denglu'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Douban',
      component: Douban
    },
    {
      path: '/douban',
      name: 'Douban',
      component: Douban
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/broad',
      name: 'Broad',
      component: Broad
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/seek',
      name: 'Seek',
      component: Seek
    },
    {
      path: '/zhuce',
      name: 'Zhuce',
      component: Zhuce
    },
    {
      path: '/denglu',
      name: 'Denglu',
      component: Denglu
    },
  ]
})
