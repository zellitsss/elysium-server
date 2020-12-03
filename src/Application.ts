import GameServer from "./GameServer";

export default class Application {
    _server: GameServer;
    
    setServer(server: GameServer) {
       this._server = server;
    }

    run() {

    }
}