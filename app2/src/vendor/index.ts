if (process.env.NODE_ENV !== 'production') {
    require('./register')
}
export const Vue = window.__modules__.Vue
export const VueRouter = window.__modules__.VueRouter
export const Vuex = window.__modules__.Vuex
export const VuePropertyDecorator = window.__modules__.VuePropertyDecorator



export const inject = (name: string, modules: any, el = '#app') => {
    if (process.env.NODE_ENV !== 'production') {
        new modules().$mount(el)
    } else {
        window.__apps__[name] = modules
    }
}