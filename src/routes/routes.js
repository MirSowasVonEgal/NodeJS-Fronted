import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Icons.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/charge',
        name: 'charge',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Charge.vue')
      },
      {
        path: '/transactions',
        name: 'transactions',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Transactions.vue')
      },
      {
        path: '/products',
        name: 'products',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Products.vue')
      },
      {
        path: '/rootserver',
        name: 'rootserver',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/RootServer/OrderRootServer.vue')
      },
      {
        path: '/rootserver/:id',
        name: 'rootserverview',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/RootServer/ViewRootServer.vue')
      },
      {
        path: '/vserver',
        name: 'vserver',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/VServer/OrderVServer.vue')
      },
      {
        path: '/vserver/:id',
        name: 'vserverview',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/VServer/ViewVServer.vue')
      },
      {
        path: '/tickets',
        name: 'tickets',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Ticket/Tickets.vue')
      },
      {
        path: '/ticket/create',
        name: 'createticket',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Ticket/CreateTicket.vue')
      },
      {
        path: '/ticket/:id',
        name: 'viewticket',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Ticket/ViewTicket.vue')
      },
      { path: '/ticket', redirect: '/tickets' }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      {
        path: '/resetpassword',
        name: 'resetpassword',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/ResetPassword.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
