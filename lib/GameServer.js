import { Room } from "./Room";
import * as Websocket from 'ws';
import * as http from 'http';
import { RoomHandler } from "./RoomHandler";
import { Client } from "./Client";
var GameServer = /** @class */ (function () {
    function GameServer() {
        this._clientList = [];
        this._roomList = [];
        this._roomHandlers = {};
        this._httpServer = http.createServer(this.requestListener.bind(this));
        this.WSServer = new Websocket.Server({
            server: this._httpServer
        });
        this.WSServer.on('connection', this.onConnection.bind(this));
    }
    GameServer.prototype.onConnection = function (socket, request) {
        console.log('Got a connection');
        var client = new Client(socket, this.onOperationMsgCB.bind(this));
        // Add client to global list of server
    };
    GameServer.prototype.onOperationMsgCB = function (client, data) {
    };
    GameServer.prototype.requestListener = function (req, res) {
    };
    GameServer.prototype.registerRoom = function (name, handler) {
        this._roomHandlers[name] = new RoomHandler(handler);
    };
    GameServer.prototype.createRoom = function (name) {
        if (this._roomHandlers.hasOwnProperty(name)) {
            return this._roomHandlers[name].create();
        }
        return null;
    };
    GameServer.prototype.addClient = function (client) {
        this._clientList.push(client);
    };
    GameServer.prototype.listen = function (port) {
        this._httpServer.listen(port);
    };
    GameServer.prototype.onRequestToJoinRoom = function (client, options) {
        if (options === void 0) { options = {}; }
    };
    GameServer.prototype.findRoom = function (options) {
        if (options === void 0) { options = {}; }
        // Psuedo code
        var r = new Room();
        return r;
    };
    return GameServer;
}());
export { GameServer };
//# sourceMappingURL=GameServer.js.map