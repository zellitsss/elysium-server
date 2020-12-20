import * as Websocket from 'ws';
import { MessageCallback } from "./Messages/MessageHandler";
export declare class Client {
    id: string;
    _ws: Websocket;
    _messageHandlerCB: <T>(client: Client, clientMessage: T) => void;
    _serverOperationCB: MessageCallback;
    constructor(socket?: Websocket, serverOperationCB?: MessageCallback);
    attach(socket: Websocket): void;
    attachRoomCB(messageHandlerCB: MessageCallback): void;
    onMessageCB(data: Websocket.Data): void;
    processRoomMessage(id: string, data: Websocket.Data): void;
    processOperationMessage(data: Websocket.Data): void;
}
