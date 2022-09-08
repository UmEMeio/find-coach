import { createRouter, createWebHistory } from "vue-router";
import CoachPage from './pages/coachPage.vue';
import CoachDetails from './components/coachComponents/CoachDetails.vue'
import requestPage from './pages/requestPage.vue';



const routes = [
  { path: '/', redirect: '/coach' },
  { path: '/coach', component: CoachPage },
  {
    path: '/coach/:id', component: CoachDetails, props: true,
    children: [{ path: '/contact', component: null }]
  },
  { path: '/register', component: null },
  { path: '/requests', component: requestPage },
  { path: '/:notFound()', component: null }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router