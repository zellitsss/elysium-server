import { Client } from "./Client";
import { Utils } from "./Utils";

export declare type RoomConstructor = (new (...args: any) => Room);

/**
 * Acting as game instance
 */
export class Room {

    id: string;
    private _patchRate: number = 15;
    private _messageHandlers: { [id: string]: any } = {};

    constructor() {
        this.id = Utils.generateID();
    }

    _onJoin(client: Client, options?: any) {
        // client.attachRoomCB(this.onMessageCB.bind(this));
    }

    onCreate() {

    }

    onJoin() {

    }

    onLeave() {

    }

    /**
     * Register a room message. For now just use the generate message from protobuf
     * @param messageID 
     * @param messageCallback 
     */
    onMessage<T>(messageID: string, messageCallback: any) {
        this._messageHandlers[messageID] = messageCallback;
    }

    onMessageCB<T>(messageID: string, client: Client, clientMsg: T) {
        this._messageHandlers[messageID](client, clientMsg);
    }

    setPatchRate(patchRate: number) {
        this._patchRate = patchRate;
    }
}