/// <reference types="node" />
import { Room, RoomConstructor } from "./Room";
import * as Websocket from 'ws';
import * as http from 'http';
import { RoomHandler } from "./RoomHandler";
import MessageHandler from "./Messages/MessageHandler";
import { Client } from "./Client";
export declare class GameServer {
    WSServer: Websocket.Server;
    _clientList: Client[];
    _roomList: Room[];
    _roomHandlers: {
        [id: string]: RoomHandler;
    };
    _httpServer: http.Server;
    _messageHandler: MessageHandler;
    constructor();
    onConnection(socket: Websocket, request: http.IncomingMessage): void;
    onOperationMsgCB(client: Client, data: Websocket.Data): void;
    requestListener(req: http.IncomingMessage, res: http.ServerResponse): void;
    registerRoom(name: string, handler: RoomConstructor): void;
    createRoom(name: string): Room;
    addClient(client: Client): void;
    listen(port: number): void;
    onRequestToJoinRoom(client: Client, options?: any): void;
    findRoom(options?: any): Room;
}
