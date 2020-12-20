import { Room } from "./Room";
import * as Websocket from 'ws';
import { Utils } from "./Utils";
import { MessageCallback } from "./Messages/MessageHandler";
import * as Messages from './Messages/Messages';

export class Client {
    id: string = '';
    _ws: Websocket;
    _messageHandlerCB: <T>(client: Client, clientMessage: T) => void = null;
    _serverOperationCB: MessageCallback = null;

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

    attachRoomCB(messageHandlerCB: MessageCallback) {
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

    processRoomMessage(id: string, data: Websocket.Data) {
        // TODO: Extract actual room message, for now just use the original one
        this._messageHandlerCB<Messages.Client_JoinRoon>(this, Messages.Client_JoinRoon.create());
    }

    processOperationMessage(data: Websocket.Data) {
        this._serverOperationCB(this, data);
    }


}