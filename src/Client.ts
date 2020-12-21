import { Room } from "./Room";
import * as Websocket from 'ws';
import { Utils } from "./Utils";
import { MessageCallback } from "./Messages/MessageHandler";
import * as Messages from './Messages/Messages';

export class Client {
    id: string = '';
    _ws: Websocket;
    _messageHandlerCB: <T>(messageID: string, client: Client, clientMsg: T) => void = null;
    _serverOperationCB: any = null;

    constructor(socket?: Websocket, serverOperationCB?: any) {
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

    attachRoomCB(messageHandlerCB: <T>(messageID: string, client: Client, clientMsg: T) => void) {
        this._messageHandlerCB = messageHandlerCB;
    }

    onMessageCB(data: Websocket.Data) {
        // TODO: Add logic about determining message type
        if (false) {
            this.processOperationMessage(data);
        } else {
            this.processRoomMessage('join_room', data);
        }
    }

    processRoomMessage<T>(id: string, message: T) {
        // TODO: Extract actual room message, for now just use the original one
        this._messageHandlerCB<T>(id, this, message);
    }

    processOperationMessage(data: Websocket.Data) {
        this._serverOperationCB(this, data);
    }


}