import { Room,RoomConstructor } from "./Room";
import * as Websocket from 'ws';
import * as http from 'http';
import { RoomHandler } from "./RoomHandler";
import { Client } from "./Client";

export class GameServer {
    WSServer: Websocket.Server;
    _clientList: Client[] = [];
    _roomList: Room[] = [];
    _roomHandlers: {[id: string]: RoomHandler} = {};
    _httpServer: http.Server;

    constructor() {
        this._httpServer = http.createServer(this.requestListener.bind(this));
        this.WSServer = new Websocket.Server({
            server: this._httpServer
        });


        this.WSServer.on('connection', this.onConnection.bind(this));
    }

    onConnection(socket: Websocket, request: http.IncomingMessage) {
        console.log('Got a connection');
        let client: Client = new Client(socket);
        for (let [id, callback] of Object.entries(this._messageCallback)) {
            client.registerMessage(id, callback);
        }
        // Add client to global list of server
    }

    onOperationMsgCB(client: Client, data: Websocket.Data) {
        
    }

    requestListener(req: http.IncomingMessage, res: http.ServerResponse): void {

    }

    registerRoom(name: string, handler: RoomConstructor) {
        this._roomHandlers[name] = new RoomHandler(handler);
    }

    createRoom(name: string): Room {
        if (this._roomHandlers.hasOwnProperty(name)) {
            return this._roomHandlers[name].create();
        }
        return null;
    }

    addClient(client: Client) {
        this._clientList.push(client);
    }

    listen(port: number) {
        this._httpServer.listen(port);
    }

    onRequestToJoinRoom(client: Client, options: any = {}) {
        
    }

    findRoom(options: any = {}): Room {
        
        // Psuedo code
        let r = new Room();
        return r;
    }

    private _messageCallback: {[id: string]: <T>(client: Client, message: T) => void} = null;
    registerMessage(id: string, callback: <T>(client: Client, message: T) => void) {
        this._messageCallback[id] = callback;
    }
}