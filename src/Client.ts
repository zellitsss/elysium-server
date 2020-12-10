import Room from "./Room";
import * as Websocket from 'ws';
import Utils from "./Utils";

export default class Client {
    id: string = '';
    _ws: Websocket;
    _messageHandlers: any[] = []; 

    constructor(socket?: Websocket) {
        this.id = Utils.generateID();
        if (socket) {
            this.attach(socket);
        }
    }
 
    attach(socket: Websocket) {
        this._ws = socket;
        this._ws.on('message', (data: Websocket.Data) => {

        });
    }
}