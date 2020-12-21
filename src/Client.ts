import * as Websocket from 'ws';
import { GetMessageType, Utils } from "./Utils";

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
            // get message data
            // get message type
            let msgType: number = GetMessageType(data);
            // resolve message with type
            if (msgType > -1) {
                this.resolveMessage(msgType.toString());
            }
        })
    }

    // Start testing for new message register

    private _messageHandler: {[id: string]: (client: Client, message: any) => void} = null;

    /**
     * Register new message callback
     * @param id use the enum MessageType that is defined in proto, should be used with toString()
     * @param callback which has the message is the generated message from proto
     */
    registerMessage(id: string, callback: (client: Client, message: any) => void) {
        this._messageHandler[id] = callback;
    }

    resolveMessage(message: any) {
        let messageType = 0;
        if (this._messageHandler.hasOwnProperty(messageType)) {
            this._messageHandler[messageType](this, message);
        }
    }
}