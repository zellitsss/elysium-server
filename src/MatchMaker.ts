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
        if (this._roomHandlers[name]) {
            const room: Room = this._roomHandlers[name].create();
            room.type = name;
            this._rooms[room.id] = room;
            return room;
        }
        throw new Error('This room type is not existed');
    }

    /**
     * Find available room or create a new one.
     * @param name room name
     */
    findOrCreate(name: string): Room {
        let foundRoom: Room;
        for (const [id, room] of Object.entries(this._rooms)) {
            if (room.isAvailable()) {
                foundRoom = room;
                break;
            }
        }
        if (!foundRoom) {
            foundRoom = this.createRoom(name);
        }
        return foundRoom;
    }

    joinOrCreate(name: string, client: Client) {
        try {
            const room: Room = this.findOrCreate(name);
            room._onJoin(client);
        } catch (e) {
            console.log(e);
        }
    }
}