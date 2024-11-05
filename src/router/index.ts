import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BlogView from '@/views/BlogView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import PrivacyPolicyView from '../views/PolicyView.vue';
import BlogPostView from '@/views/BlogPostView.vue';
import CategoryView from '@/views/CategoryView.vue';
import AuthorView from '@/views/AuthorView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
  },
  {
    path: '/blog-post',
    name: 'blog-post',
    component: BlogPostView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryView,
  },
  {
    path: '/author',
    name: 'author',
    component: AuthorView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicyView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
