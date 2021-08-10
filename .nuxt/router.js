import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _10988fc4 = () => interopDefault(import('../pages/Final.vue' /* webpackChunkName: "pages/Final" */))
const _301b7a0d = () => interopDefault(import('../pages/Step1.vue' /* webpackChunkName: "pages/Step1" */))
const _3029918e = () => interopDefault(import('../pages/Step2.vue' /* webpackChunkName: "pages/Step2" */))
const _3037a90f = () => interopDefault(import('../pages/Step3.vue' /* webpackChunkName: "pages/Step3" */))
const _3045c090 = () => interopDefault(import('../pages/Step4.vue' /* webpackChunkName: "pages/Step4" */))
const _3053d811 = () => interopDefault(import('../pages/Step5.vue' /* webpackChunkName: "pages/Step5" */))
const _3061ef92 = () => interopDefault(import('../pages/Step6.vue' /* webpackChunkName: "pages/Step6" */))
const _3af2f19a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Final",
    component: _10988fc4,
    name: "Final"
  }, {
    path: "/Step1",
    component: _301b7a0d,
    name: "Step1"
  }, {
    path: "/Step2",
    component: _3029918e,
    name: "Step2"
  }, {
    path: "/Step3",
    component: _3037a90f,
    name: "Step3"
  }, {
    path: "/Step4",
    component: _3045c090,
    name: "Step4"
  }, {
    path: "/Step5",
    component: _3053d811,
    name: "Step5"
  }, {
    path: "/Step6",
    component: _3061ef92,
    name: "Step6"
  }, {
    path: "/",
    component: _3af2f19a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
