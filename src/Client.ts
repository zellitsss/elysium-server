import Room from "./Room";

import { nanoid } from 'nanoid';
import * as Websocket from 'websocket';

export default class Client {
    _id: string = '';
    _connection: Websocket.connection = null;

    constructor() {
        this._id = nanoid(6);
    }
 
    setConnection(connection: Websocket.connection) {
        this._connection = connection;
    }
}