const WebSocket = require("ws");
const uuid = require("uuid");
const redisSerivce = require("./redis.js")
const connService = require("./connection.js")

module.exports = (server) => {

    const wss = new WebSocket.Server({
        server,
        disableHixie: true,
        clientTracking: true,
        perMessageDeflate: true,
        handshakeTimeout: 5000,
        maxPayload: 10 * 1024 * 1024, //10mb
        path: "/ws",
        // verifyClient: (info, done) => {
        //     const isVerified = info.origin.includes("8080") || info.origin.includes("3000") || info.origin.includes("ngrok")
        //     done(isVerified)
        // }
    });

    wss.on("connection", (ws) => {
        console.log(`WebSocket connected. PID: ${process.pid}`)
        ws._id = uuid.v4()
        //start heartbeat
        connService.heartbeat();
        //add conn to memory
        connService.addConnection(ws);

        //broadcast notification message to all online users excluding itself
        redisSerivce.publish({ wsId: ws._id, message: { type: "notification", text: `PID: ${process.pid} joined.` } })

        ws.on("message", message => {
            redisSerivce.publish({ wsId: ws._id, message: JSON.parse(message) })
        });
        ws.on("pong", () => connService.isAlive(ws._id));
        ws.on("close", () => connService.deleteConnection(ws._id));
        ws.on("error", (error) => console.error(error));
    });

};
