import * as Websocket from 'ws';
import { GameServer } from './GameServer';
import { Room } from './Room';
import { MessageCallback } from './Types';
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
            if (typeof data === 'string') {
                
            } else if (data instanceof Buffer) {
                let msgType: number = GetMessageType(data);
                this.resolveMessage(msgType.toString(), data);
            } else {
                // data type of ArrayBuffer | Buffer[] will be handled later
            }
        });
    }

    // Start testing for new message register

    private _messageHandlers: {[id: string]: MessageCallback} = {};

    /**
     * Register new message callback
     * @param id use the enum MessageType that is defined in proto, should be used with toString()
     * @param callback which has the message is the generated message from proto
     */
    registerMessage(id: string, callback: MessageCallback) {
        this._messageHandlers[id] = callback;
    }

    resolveMessage(id: string, message: any) {
        if (this._messageHandlers.hasOwnProperty(id)) {
            this._messageHandlers[id](this, message);
        }
    }
}