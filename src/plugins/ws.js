import WsService from "../services/ws";

export default {
    // The install method will be called with the Vue constructor as the first argument, along with possible options
    install(Vue, options = {}) {
        const ws = new WsService({ url: options.url, store: options.store, interval: options.interval });
        ws.init();
        // Add $ws instance property directly to Vue components
        Vue.prototype.$ws = ws
    }
}