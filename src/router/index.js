import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载
const Layout = () => import('@/views/Layout/index.vue')
const Login = () => import('@/views/Login/index.vue')
const Home = () => import('@/views/Home/index.vue')
const Category = () => import('@/views/Category/index.vue')
const NotFound = () => import('@/views/NotFound/index.vue')
const SubCategory = () => import ('@/views/SubCategory/index.vue')
const Detail = () => import ('@/views/Detail/index.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
          meta: { 
            title: '首页',
            requiresAuth: true
          }
        },
        {
          path: '/category/:id',
          name: 'category',
          component: Category,
          meta: { 
            title: '分类管理',
            requiresAuth: true
          }
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: Detail
        }
      ]
    },
    // 404路由配置 - 放在最后
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound
    }
  ]
})

// 路由守卫
// router.beforeEach((to, from, next) => {
//   // 检查路由是否需要认证
//   if (to.meta.requiresAuth) {
//     // 检查是否有token
//     const token = localStorage.getItem('token')
//     if (token) {
//       next()
//     } else {
//       // 没有token，重定向到登录页
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

export default router
