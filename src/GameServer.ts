import Room from "./Room";
import * as Websocket from 'websocket';
import Client from "./Client";

export declare type RoomHandler<T> = new (...args: any[]) => T;
export default class GameServer {
    WSServer: Websocket.server;
    _clientList: Client[] = [];

    constructor() {
        this.WSServer = new Websocket.server();
        this.WSServer.on('connect', (connection: Websocket.connection) => {
            let client: Client = new Client();
            client.setConnection(connection);
            this.addClient(client);
        });
    }

    defineRoom<T extends RoomHandler<Room>>(name: string, handler: T) {

    }

    addClient(client: Client) {
        this._clientList.push(client);
    }

    run() {

    }
}