import { RouteRecordRaw } from 'vue-router';

export interface RouteMeta {
  name?: string;
  title?: string;
}


const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'Front',
    component: () => import('@/pages/Front.vue'),
    meta: {
      title: 'Front',
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
    meta: {
      title:'Login'
    }
  }
];

export default routes;
