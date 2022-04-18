const redis = require("redis");
const connService = require("./connection.js")
const subscriber = redis.createClient();
const publisher = redis.createClient();
const WS_MESSAGE = "ws:message";

subscriber.subscribe(WS_MESSAGE);

subscriber.on("message", (channel, message) => {
    const data = JSON.parse(message);
    const connections = connService.getConnections();
    if (channel === WS_MESSAGE) {
        for (key in connections) {
            if (key !== data.wsId && connections[key].ws.readyState === 1) {
                connections[key].ws.send(JSON.stringify(data.message));
            }
        }
    }
});

module.exports = {
    publish: (message) => {
        publisher.publish(WS_MESSAGE, JSON.stringify(message))
    }
}