import Room from "./Room";
import * as Websocket from 'ws';
import Utils from "./Utils";
import { MessageCallback } from "./Messages/MessageHandler";

export default class Client {
    id: string = '';
    _ws: Websocket;
    _messageHandlerCB: MessageCallback = null;
    _serverOperationCB: MessageCallback = null

    constructor(socket?: Websocket, serverOperationCB?: MessageCallback) {
        this.id = Utils.generateID();
        if (socket) {
            this.attach(socket);
        }
        if (serverOperationCB) {
            this._serverOperationCB = serverOperationCB;
        }
    }
 
    attach(socket: Websocket) {
        this._ws = socket;
        this._ws.on('message', this.onMessageCB.bind(this));
    }

    onMessageCB(data: Websocket.Data) {
        // TODO: Add logic about determining message type
        if (false) {
            this.processOperationMessage(data);
        } else {
            this.processRoomMessage(data);
        }
    }

    processRoomMessage(data: Websocket.Data) {
        // TODO: Extract actual room message, for now just use the original one
    }

    processOperationMessage(data: Websocket.Data) {
        this._serverOperationCB(this, data);
    }
}