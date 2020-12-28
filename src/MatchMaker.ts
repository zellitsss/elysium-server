import { Client } from './Client';
import { Room, RoomConstructor } from './Room';
import { RoomHandler } from './RoomHandler';

export class MatchMaker {

    private _roomHandlers: {[id: string]: RoomHandler} = {};
    private _rooms: {[id: string]: Room} = {};

    registerRoom(name: string, handler: RoomConstructor) {
        this._roomHandlers[name] = new RoomHandler(handler);
    }

    createRoom(name: string): Room {
        if (Object.prototype.hasOwnProperty.call(this, name)) {
            return this._roomHandlers[name].create();
        }
        return null;
    }

    /**
     * Find available room or create a new one.
     * @param name room name
     */
    findOrCreate(name: string): Room {
        // TODO: Actually find a rooom
        return this.createRoom(name);
    }

    joinOrCreate(name: string, client: Client) {
        const room: Room = this.findOrCreate(name);
        room._onJoin(client);
    }
}