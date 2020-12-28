import { Client } from './Client';
import { MessageCallback } from './Types';
import { Utils } from './Utils';

export declare type RoomConstructor = (new (...args: any) => Room);

/**
 * Acting as game instance
 */
export class Room {

    id: string;
    private _patchRate = 15;
    private _messageHandlers: { [id: string]: MessageCallback } = {};

    isPrivate = false;
    allowBot = false;
    minPlayer = 1;
    maxPlayer = 16;

    constructor() {
        this.id = Utils.generateID();
    }

    public _onCreate() {
        if (this.onCreate) {
            this.onCreate();
        }
    }

    public _onJoin(client: Client, options?: any) {
        for (const [id, callback] of Object.entries(this._messageHandlers)) {
            client.registerMessage(id, callback);
        }
        if (this.onJoin) {
            this.onJoin(client);
        }
    }

    public _onLeave() {
        // Prevent empty method
    }

    // Optional abstract methods
    public onCreate?(): void;
    public onJoin?(client: Client): void;
    public onLeave?(): void;

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

    setPrivate(isPrivate: boolean) {
        this.isPrivate = isPrivate;
    }

    setAllowBot(allowBot: boolean) {
        this.allowBot = allowBot;
    }
    
    setMinPlayer(num: number) {
        this.minPlayer = num;
    }

    setMaxPlayer(num: number) {
        this.maxPlayer = num;
    }
}