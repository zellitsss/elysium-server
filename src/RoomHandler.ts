import { Room, RoomConstructor } from "./Room";

export class RoomHandler {
    _klass: RoomConstructor;
    _options: any = {};

    constructor(klass: RoomConstructor, options: any = {}) {
        this._klass = klass;
        this._options = options;
    }

    create(): Room {
        let room: Room = new this._klass(this._options);
        room._onCreate();
        return room;
    }
}