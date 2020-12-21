import * as Websocket from 'ws';
import { Utils } from "./Utils";

export class Client {
    id: string = '';
    _ws: Websocket;

    constructor(socket?: Websocket) {
        this.id = Utils.generateID();
        if (socket) {
            this.attach(socket);
        }
    }
 
    attach(socket: Websocket) {
        this._ws = socket;
        this._ws.on('message', (data: Websocket.Data) => {

        })
    }

    // Start testing for new message register

    private _messageHandler: {[id: string]: <T>(client: Client, message: T) => void} = null;

    /**
     * Register new message callback
     * @param id use the enum MessageType that is defined in proto
     * @param callback which has the message is the generated message from proto
     */
    registerMessage(id: string, callback: <T>(client: Client, message: T) => void) {
        this._messageHandler[id] = callback;
    }

    resolveMessage<T>(message: T) {
        let messageType = 0;
        if (this._messageHandler.hasOwnProperty(messageType)) {
            this._messageHandler[messageType](this, message);
        }
    }
}