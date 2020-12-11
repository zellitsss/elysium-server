import * as Websocket from 'ws';
import Client from '../Client';

export declare type MessageCallback = (client: Client, message: any) => void;
export default class MessageHandler {

    constructor() {
    }

    process(client: Client, message: Websocket.Data) {
    }
}