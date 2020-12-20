import { Client } from "./Client";
export declare type RoomConstructor = (new (...args: any) => Room);
/**
 * Acting as game instance
 */
export declare class Room {
    id: string;
    private _patchRate;
    private _messageHandlers;
    constructor();
    _onJoin(client: Client, options?: any): void;
    onCreate(): void;
    onJoin(): void;
    onLeave(): void;
    onMessage<T>(messageID: string, messageCallback: T): void;
    onMessageCB<T>(client: Client, clientMsg: T): void;
    setPatchRate(patchRate: number): void;
}
