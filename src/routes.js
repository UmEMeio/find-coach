import { createRouter, createWebHistory } from "vue-router";
import coachPage from './pages/coachPage.vue';
import requestPage from './pages/requestPage.vue'


const routes = [{ path: '/', redirect: '/coach' }, { path: '/coach', component: coachPage }, { path: '/requests', component: requestPage }]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router