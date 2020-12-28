import { Room,RoomConstructor } from "./Room";
import * as Websocket from 'ws';
import * as http from 'http';
import { RoomHandler } from "./RoomHandler";
import { Client } from "./Client";
import * as MessageDefines from "./Messages/MessageDefines";
import { MessageCallback } from "./Types";
import { MatchMaker } from "./MatchMaker";

export class GameServer {
    WSServer: Websocket.Server;
    _clientList: Client[] = [];
    _roomList: Room[] = [];
    _httpServer: http.Server;
    private _matchMaker: MatchMaker = null;

    static inst: GameServer = null;

    constructor() {
        if (GameServer.inst !== null) {
            return;
        }
        this._httpServer = http.createServer(this.requestListener.bind(this));
        this.WSServer = new Websocket.Server({
            server: this._httpServer
        });
        this.registerDefaultCallbacks();
        this.WSServer.on('connection', this.onConnection.bind(this));
        this._matchMaker = new MatchMaker();
        GameServer.inst = this;
    }

    onConnection(socket: Websocket, request: http.IncomingMessage) {
        console.log('Got a connection');
        let client: Client = new Client(socket);
        for (let [id, callback] of Object.entries(this._messageHandlers)) {
            client.registerMessage(id, callback);
        }
        // Add client to global list of server
    }

    requestListener(req: http.IncomingMessage, res: http.ServerResponse): void {

    }

    registerRoom(name: string, handler: RoomConstructor) {
        this._matchMaker.registerRoom(name, handler);
    }

    createRoom(name: string): Room {
        return this._matchMaker.createRoom(name);
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

    private _messageHandlers: {[id: string]: MessageCallback} = {};

    registerMessage(id: string, callback: MessageCallback) {
        this._messageHandlers[id] = callback;
    }

    private _onClientJoinRoom: MessageCallback = null;
    private _onClientLeaveRoom: MessageCallback = null;

    setOnClientJoinRoomCB(callback: MessageCallback, id?: string) {
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

    setOnClientLeaveRoomCB(callback: MessageCallback, id?: string) {
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
            let roomType: string = 'game_room';
            this._matchMaker.joinOrCreate(roomType, client);
        });
        this.setOnClientLeaveRoomCB((client: Client, message: any) => {
            console.log(client.id, 'leave room');
        });
    }
}