export default [
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/default/Profile.vue'),
    },
    {
      path: '/organization',
      name: 'organization',
      component: () => import('@/views/default/Organization.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/views/default/History.vue'),
    },
    {
      path: '/route-plan/index',
      name: 'route-plan',
      component: () => import('@/views/default/RoutePlan/index.vue'),
    },
    {
      path: '/route-plan/create',
      name: 'route-plan-create',
      component: () => import('@/views/default/RoutePlan/Create.vue'),
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: () => import('@/views/default/Accounts/index.vue'),
    },
    {
      path: '/accounts/more',
      name: 'accounts-more',
      component: () => import('@/views/default/Accounts/More.vue'),
    },
    {
      path: '/license',
      name: 'license',
      component: () => import('@/views/default/License.vue'),
    },
    {
      path: '/priority',
      name: 'priority',
      component: () => import('@/views/default/Priority.vue'),
    },
    {
      path: '/statistic',
      name: 'statistic',
      component: () => import('@/views/default/Statistic.vue'),
    },
    {
      path: '/knowledge-base',
      name: 'knowledge-base',
      component: () => import('@/views/default/KnowledgeBase.vue'),
    },
  ]