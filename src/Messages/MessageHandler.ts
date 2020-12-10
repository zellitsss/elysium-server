import * as Websocket from 'ws';
export default class MessageHandler {

    constructor() {

    }

    parse(message: Websocket.Data) {
        // get type: operation msg or room msg
    }

    processOperation(msg: Websocket.Data) {

    }

    processRoom(msg: Websocket.Data) {
        
    }
}