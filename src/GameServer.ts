import Room from "./Room";
import * as Websocket from 'ws';
import Client from "./Client";
import * as http from 'http';

export declare type RoomHandler<T> = new (...args: any[]) => T;
export default class GameServer {
    WSServer: Websocket.Server;
    _clientList: Client[] = [];
    _roomList: Room[] = [];

    constructor() {
        let httpServer = http.createServer(this.requestListener.bind(this));

        this.WSServer = new Websocket.Server({
            server: httpServer
        });
        this.WSServer.on('connection', this.onConnection);
    }

    onConnection(socket: Websocket, request: http.IncomingMessage) {
        let client: Client = new Client();
        let options: any = {};
        let room: Room;
        room._onJoin(client, options);
    }

    requestListener(req: http.IncomingMessage, res: http.ServerResponse): void {

    }

    defineRoom<T extends RoomHandler<Room>>(name: string, handler: T) {

    }

    addClient(client: Client) {
        this._clientList.push(client);
    }

    listen(port: number) {

        this.WSServer
    }

    onRequestToJoinRoom(client: Client, options: any = {}) {
        
    }

    findRoom(options: any = {}): Room {
        
        // Psuedo code
        let r = new Room();
        return r;
    }
}