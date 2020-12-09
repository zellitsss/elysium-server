import GameServer from "./GameServer";

export default class Application {
    _server: GameServer;

    setServer(server: GameServer) {
       this._server = server;
    }

    listen(port: number) {
        this._server.listen(port);
    }
}