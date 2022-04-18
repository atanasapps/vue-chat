const app = require("./app"),
    http = require("http"),
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000;
const server = http.createServer(app);

//load server env
// require('dotenv').config()

//start ws
require("./services/ws.js")(server);

// Listen the server
server.listen(port, host);
console.log(`Server listening on ${host}:${port}`)