import Room, { RoomConstructor } from "./Room";
import * as Websocket from 'ws';
import Client from "./Client";
import * as http from 'http';
import RoomHandler from "./RoomHandler";
import MessageHandler from "./Messages/MessageHandler";

export default class GameServer {
    WSServer: Websocket.Server;
    _clientList: Client[] = [];
    _roomList: Room[] = [];
    _roomHandlers: {[id: string]: RoomHandler} = {};
    _httpServer: http.Server;
    _messageHandler: MessageHandler;

    constructor() {
        this._httpServer = http.createServer(this.requestListener.bind(this));
        this.WSServer = new Websocket.Server({
            server: this._httpServer
        });

        this._messageHandler = new MessageHandler();

        this.WSServer.on('connection', this.onConnection.bind(this));
    }

    onConnection(socket: Websocket, request: http.IncomingMessage) {
        console.log('Got a connection');
        let client: Client = new Client(socket, this.onMessageCB.bind(this));
        // Add client to global list of server
    }

    onMessageCB(client: Client, message: Websocket.Data) {
        this._messageHandler.parse(message);
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
}