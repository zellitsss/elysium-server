import { Room, RoomConstructor } from "./Room";
export declare class RoomHandler {
    _klass: RoomConstructor;
    _options: any;
    constructor(klass: RoomConstructor, options?: any);
    create(): Room;
}
