export default class WsService {
    constructor({ url, store, interval }) {
        this.url = url || null;
        this.store = store || null;
        this.interval = interval || 3000;
        this.ws = null;
        this.timer = null;
    }

    init() {
        try {
            this.ws = new WebSocket(this.url);
            this.ws.onopen = this.onOpen.bind(this);
            this.ws.onmessage = this.onMessage.bind(this);
            this.ws.onclose = this.onClose.bind(this);
            this.ws.onerror = this.onError.bind(this);
        } catch (ex) {
            console.log("WebSocket connection failed: " + ex);
        }
    }

    onOpen() {
        clearInterval(this.timer);
        this.store.dispatch("user/setIsOnline", true);
        console.log("WebSocket connected.");
    }

    onMessage({ data }) {
        const message = JSON.parse(data);
        if (message.type === "message")
            this.store.dispatch("message/addMessage", message);
        else this.store.dispatch("notification/addNotification", message);
    }

    onClose() {
        console.log("WebSocket closed.");
        this.store.dispatch("user/setIsOnline", false);
        this.reconnect();
    }

    onError() {
        console.log("WebSocket error: Closing socket");
        this.ws.close();
    }

    reconnect() {
        console.log("WebSocket reconnecting.");
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            return this.init();
        }, this.interval);
    }

    sendMessage(message) {
        if (this.ws.readyState === 1) {
            this.ws.send(JSON.stringify(message));
            this.store.dispatch("message/addMessage", message);
        }
    }
}