import Room from "./Room";

export declare type RoomHandler<T> = new (...args: any[]) => T;
export default class GameServer {
    defineRoom<T extends RoomHandler<Room>>(name: string, handler: T) {

    }
}