// Website pages
const StartPage = () => import('@views/website/StartPage')
const LoginPage = () => import('@views/website/LoginPage')

// Errors Pages
const Error404Page = () => import('@views/errors/Error404Page')

// Modules Pages
const SystemBodyPage = () => import('@views/system/SystemBodyPage')
// User
const UserDashboardPage = () => import('@views/system/user/DashboardPage')

export const routes = [
  {
    path: '/',
    component: StartPage,
    props: false,
    meta: {
      requiresAuth: false
    },
    children: [
      {
        path: '/',
        name: 'LoginPage',
        component: LoginPage
      },
      {
        path: '/404',
        name: 'Error404Page',
        component: Error404Page,
        props: false
      }
    ]
  },
  {
    path: '/system',
    component: SystemBodyPage,
    props: false,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'user',
        name: 'UserDashboardPage',
        component: UserDashboardPage,
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]
