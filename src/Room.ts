import { Client } from "./Client";
import { MessageCallback } from "./Types";
import { Utils } from "./Utils";

export declare type RoomConstructor = (new (...args: any) => Room);

/**
 * Acting as game instance
 */
export class Room {

    id: string;
    private _patchRate: number = 15;
    private _messageHandlers: { [id: string]: MessageCallback } = {};

    constructor() {
        this.id = Utils.generateID();
    }

    private _onCreate() {

    }

    onCreate() {
        
    }
    
    private _onJoin(client: Client, options?: any) {
        for (let [id, callback] of Object.entries(this._messageHandlers)) {
            client.registerMessage(id, callback);
        }
    }

    onJoin() {

    }

    private _onLeave() {

    }

    onLeave() {

    }

    /**
     * Register a room message. For now just use the generate message from protobuf
     * @param messageID 
     * @param messageCallback 
     */
    onMessage(messageID: string, messageCallback: MessageCallback) {
        this._messageHandlers[messageID] = messageCallback;
    }

    setPatchRate(patchRate: number) {
        this._patchRate = patchRate;
    }
}