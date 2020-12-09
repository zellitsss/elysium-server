import Room from "./Room";

import { nanoid } from 'nanoid';
import * as Websocket from 'ws';

export default class Client {
    _id: string = '';

    constructor() {
        this._id = nanoid(6);
    }
 
    setConnection() {
    }
}