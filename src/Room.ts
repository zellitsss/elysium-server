import { Client } from './Client';
import { MessageCallback } from './Types';
import { Utils } from './Utils';

export declare type RoomConstructor = (new (...args: any) => Room);

/**
 * Acting as game instance
 */
export class Room {

    id: string;
    type: string;
    private _patchRate = 15;
    private _messageHandlers: { [id: string]: MessageCallback } = {};
    private _clients: Client[] = [];

    isPrivate = false;
    allowBot = false;
    minPlayer = 1;
    maxPlayer = 16;

    private _stateSyncInterval: NodeJS.Timer;

    constructor() {
        this.id = Utils.generateID();
    }

    public _onCreate() {
        if (this.onCreate) {
            this.onCreate();
        }
    }

    public _onJoin(client: Client, options?: any) {
        this._clients.push(client);
        for (const [id, callback] of Object.entries(this._messageHandlers)) {
            client.registerMessage(id, callback);
        }
        client._ws.on('close', (code: number, reason: string) => {
            this._onLeave(client);
        });
        if (this.onJoin) {
            this.onJoin(client);
        }
    }

    public _onLeave(client: Client) {
        
        const foundIndex: number = this._clients.findIndex((c: Client) => {
            return client.id === c.id;
        });
        if (foundIndex >= 0) {
            this._clients.splice(foundIndex, 1);
        }

        if (this.onLeave) {
            this.onLeave(client);
        }
    }

    // Optional abstract methods
    public onCreate?(): void;
    public onJoin?(client: Client): void;
    public onLeave?(client: Client): void;

    /**
     * Register a room message. For now just use the generated message from protobuf
     * @param messageID 
     * @param messageCallback 
     */
    onMessage(messageID: string, messageCallback: MessageCallback) {
        this._messageHandlers[messageID] = messageCallback;
    }

    /**
     * This method should be defined before setPatchRate
     */
    onStateBroadcast?(): void;

    setPatchRate(patchRate: number) {
        this._patchRate = patchRate;
        if (this._stateSyncInterval) {
            clearInterval(this._stateSyncInterval);
            this._stateSyncInterval = undefined;
        }
        if (patchRate !== null && patchRate !== 0 && this.onStateBroadcast) {
            this._stateSyncInterval = setInterval(this.onStateBroadcast.bind(this), this._patchRate);
        }
    }

    /**
     * Broadcast message to all clients
     * @param message message to broadcast, it can be either binary or JSON string
     */
    broadcast(message: any) {
        this._clients.forEach((client: Client) => {
            client.send(message);
        });
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

    getCurrentClient(): number {
        return this._clients.length;
    }

    /**
     * Return the availability of the room
     */
    isAvailable(): boolean {
        if (this.getCurrentClient() <= this.maxPlayer && !this.isPrivate) {
            return true;
        }
        return false;
    }
}