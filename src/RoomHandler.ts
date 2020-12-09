import Room, { RoomConstructor } from "./Room";

export default class RoomHandler {
    _klass: RoomConstructor;
    _options: any = {};

    constructor(klass: RoomConstructor, options: any = {}) {
        this._klass = klass;
        this._options = options;
    }

    create(): Room {
        return new this._klass(this._options);
    }
}