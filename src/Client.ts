import Room from "./Room";
import * as Websocket from 'ws';
import Utils from "./Utils";

export default class Client {
    id: string = '';

    constructor() {
        this.id = Utils.generateID();
    }
 
    setConnection() {
    }
}