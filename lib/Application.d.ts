import { GameServer } from "./GameServer";
export declare class Application {
    _server: GameServer;
    setServer(server: GameServer): void;
    listen(port: number): void;
}
