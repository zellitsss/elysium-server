import Client from "./Client";

export declare type RoomConstructor = (new (...args: any) => Room);

/**
 * Acting as game instance
 */
export default class Room {

    private _patchRate: number = 15;

    constructor() {
        
    }

    _onJoin(client: Client, options?: any) {
        
    }

    onCreate() {

    }

    onJoin() {

    }

    onLeave() {

    }

    onMessage(messageID: string, messageCallback: any) {
        
    }

    setPatchRate(patchRate: number) {
        this._patchRate = patchRate;
    }
}