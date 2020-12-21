import * as Websocket from 'ws';
import { Client } from '../Client';

export abstract class MessageHandler {
    private _messageCallback: {[id: number]: <T>(client: Client, mesage: T) => void} = null;
    registerMessage(id: number, callback: <T>(client: Client, message: T) => void) {
        
    }
}