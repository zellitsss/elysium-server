import { Room,RoomConstructor } from "./Room";
import * as Websocket from 'ws';
import * as http from 'http';
import { RoomHandler } from "./RoomHandler";
import { Client } from "./Client";
import * as MessageDefines from "./Messages/MessageDefines";

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
        this.registerDefaultCallbacks();
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

    findRoom(options: any = {}): Room {
        
        // Psuedo code
        let r = new Room();
        return r;
    }

    private _messageCallback: {[id: string]: (client: Client, message: any) => void} = {};

    registerMessage(id: string, callback: (client: Client, message: any) => void) {
        this._messageCallback[id] = callback;
    }

    private _onClientJoinRoom: (client: Client, message: any) => void = null;
    private _onClientLeaveRoom: (client: Client, message: any) => void = null;

    setOnClientJoinRoomCB(callback: (client: Client, message: any) => void, id?: string) {
        this._onClientJoinRoom = callback;
        if (this._onClientJoinRoom == null) {
            return;
        }
        if (id) {
            this.registerMessage(id, this._onClientJoinRoom);
        } else {
            this.registerMessage(MessageDefines.MessageType.JOIN_ROOM.toString(), this._onClientJoinRoom);
        }
    }

    setOnClientLeaveRoomCB(callback: (client: Client, message: any) => void, id?: string) {
        this._onClientLeaveRoom = callback;
        if (this._onClientLeaveRoom == null) {
            return;
        }
        if (id) {
            this.registerMessage(id, this._onClientLeaveRoom);
        } else {
            this.registerMessage(MessageDefines.MessageType.LEAVE_ROOM.toString(), this._onClientLeaveRoom);
        }
    }

    registerDefaultCallbacks() {
        this.setOnClientJoinRoomCB((client: Client, message: any) => {
            
        });
        this.setOnClientLeaveRoomCB((client: Client, message: any) => {
            console.log(client.id, 'leave room');
        });
    }
}