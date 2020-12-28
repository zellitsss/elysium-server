import { GameServer } from './GameServer';

export class Application {
    _server: GameServer;

    setServer(server: GameServer): void {
        this._server = server;
    }

    listen(port: number): void {
        this._server.listen(port);
    }
}