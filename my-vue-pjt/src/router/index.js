import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/movies',
      component: MovieListView
    },
    {
      path: '/:movieId', // id로 들어왔을때
      component: MovieDetailView
    },

    {
      path: '/review-search', // id로 들어왔을때
      component: ReviewSearchView
    },

    {
      path: '/recommended', // id로 들어왔을때
      component: RecommendedView
    }
  ],
})

export default router
