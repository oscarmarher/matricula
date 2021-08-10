import Vue from 'vue'

const components = {
  Button: () => import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => c.default || c),
  InputPrincipal: () => import('../../components/InputPrincipal.vue' /* webpackChunkName: "components/input-principal" */).then(c => c.default || c),
  Select: () => import('../../components/Select.vue' /* webpackChunkName: "components/select" */).then(c => c.default || c),
  Steps: () => import('../../components/Steps.vue' /* webpackChunkName: "components/steps" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
