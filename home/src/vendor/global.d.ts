import Vue, {VueConstructor, PluginFunction} from 'vue'
import VueRouter, {RouterOptions} from 'vue-router'
import {Store, install} from 'vuex'
import * as decorator from 'vue-property-decorator';
declare global {
    interface Window {
        __apps__: {[key: string]: VueConstructor}
        __modules__: {
            Vue: VueConstructor,
            VueRouter: {
                new (options: RouterOptions): VueRouter
            },
            Vuex: {
                Store: typeof Store
                install: typeof install
            },
            VuePropertyDecorator: typeof decorator
        }
    }
}
declare module 'vue/types/vue' {
    interface Vue {
        $app: any
    }
}