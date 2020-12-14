import Client from "./Client";
import { MessageCallback } from "./Messages/MessageHandler";
import Utils from "./Utils";

export declare type RoomConstructor = (new (...args: any) => Room);

/**
 * Acting as game instance
 */
export default class Room {

    id: string;
    private _patchRate: number = 15;
    private _messageHandlers: {[id: string]: any} = {};

    constructor() {
        this.id = Utils.generateID();
    }

    _onJoin(client: Client, options?: any) {
        client.attachRoomCB(this.onMessageCB.bind(this));
    }

    onCreate() {

    }

    onJoin() {

    }

    onLeave() {

    }

    onMessage<T>(messageID: string, messageCallback: T) {
        this._messageHandlers[messageID] = messageCallback;
    }

    onMessageCB<T>(client: Client, clientMsg: T) {

    }

    setPatchRate(patchRate: number) {
        this._patchRate = patchRate;
    }
}