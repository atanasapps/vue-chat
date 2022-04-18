let connections = {}; // Example: { 'connectionId': {isAlive: true, ws: ws } }
const interval = 30000;

const addConnection = (ws) => {
    connections[ws._id] = { ws, isAlive: true };
}

const getConnection = (_id) => {
    return connections[_id];
}

const getConnections = () => {
    return connections;
}

const isAlive = (_id) => {
    if (connections[_id]) connections[_id].isAlive = true;
}

const deleteConnection = (_id) => {
    delete connections[_id];
}

const heartbeat = () => {
    //check for broken connections
    setInterval(() => {
        for (let conn in connections) {
            if (connections[conn]) {
                if (!connections[conn].isAlive) {
                    this.deleteConnection(connections[conn]._id)
                } else {
                    connections[conn].isAlive = false;
                    connections[conn].ws.ping();
                }
            }
        }
    }, interval);
}

module.exports = {
    addConnection,
    getConnection,
    getConnections,
    isAlive,
    heartbeat,
    deleteConnection
}