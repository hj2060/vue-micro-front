import Vue from 'vue'
interface config {
    [appname: string]: {
        lib: string[]
    }
}
export default class AppRouter {
    private config: config
    private currentName = ''
    private currentInstance!: Vue
    constructor(config: config) {
        this.config = config
        this.init()
    }
    public $router(appName: string, path = '/', type: 'push' | 'replace' | 'back' = 'push') {
        if (!Object.keys(this.config).includes(appName)) {
            throw new Error('the app is not find')
        }
        return this.loadApp(appName).then(() => {
            if (this.currentInstance && this.currentName && appName !== this.currentName) {
                this.currentInstance.$destroy()
            }
            const app = window.__apps__[appName]
            this.currentInstance = new app().$mount('#app')
            this.currentName = appName
            if (type === 'back') {
                this.currentInstance.$router.back()
            } else {
                this.currentInstance.$router[type](path)
            }
        })
    }
    private loadApp(appName: string): Promise<any> {
        if (!window.__apps__[appName]) {
            const libLoaders = this.config[appName].lib.map(l => {
                return new Promise((resolve, reject) => {
                    let script: HTMLScriptElement | HTMLLinkElement
                    if (l.includes('.css')) {
                        script = document.createElement('link')
                        script.rel = 'stylesheet'
                        script.href = l
                    } else {
                        script = document.createElement('script')
                        script.src = l
                    }
                    document.head!.appendChild(script)
                    script.onload = resolve
                    script.onerror = reject
                })
            })
            return Promise.all(libLoaders)
        }
        return Promise.resolve()
    }
    private parsePath() {
        const appName = window.location.pathname.match(/\/(\w+)(\/[\w?&\d=\/]+)?/)
        if (appName) {
            return {
                app: appName[1],
                path: appName[2]
            }
        }
    }
    private init() {
        this.addEvent()
        const res = this.parsePath()
        if (res && res.app !== 'home') {
            this.$router(res.app, res.path)
        }
    }
    private addEvent() {
        window.addEventListener('popstate', e => {
            // const res = this.parsePath()
        })
    }
}