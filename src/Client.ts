import Room from "./Room";
import * as Websocket from 'ws';
import Utils from "./Utils";

export default class Client {
    id: string = '';
    _ws: Websocket;
    _messageHandlerCB: (client: Client, message: Websocket.Data) => void = null;

    constructor(socket?: Websocket, messageHandlerCB?: (client: Client, message: Websocket.Data) => void) {
        this.id = Utils.generateID();
        if (socket) {
            this.attach(socket);
        }
        this._messageHandlerCB = messageHandlerCB;
    }
 
    attach(socket: Websocket) {
        this._ws = socket;
        this._ws.on('message', (data: Websocket.Data) => {
            if (this._messageHandlerCB) {
                this._messageHandlerCB(this, data);
            }
        });
    }
}