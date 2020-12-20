import * as Websocket from 'ws';
import { Client } from '../Client';

export declare type MessageCallback<T> = (client: Client, message: T) => void;
export default class MessageHandler {

    constructor() {
    }

    process(client: Client, message: Websocket.Data) {
    }
}