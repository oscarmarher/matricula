export { default as Button } from '../../components/Button.vue'
export { default as InputPrincipal } from '../../components/InputPrincipal.vue'
export { default as Select } from '../../components/Select.vue'
export { default as Steps } from '../../components/Steps.vue'

export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => c.default || c)
export const LazyInputPrincipal = import('../../components/InputPrincipal.vue' /* webpackChunkName: "components/input-principal" */).then(c => c.default || c)
export const LazySelect = import('../../components/Select.vue' /* webpackChunkName: "components/select" */).then(c => c.default || c)
export const LazySteps = import('../../components/Steps.vue' /* webpackChunkName: "components/steps" */).then(c => c.default || c)
