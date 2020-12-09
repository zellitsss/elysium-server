import Application from "../src/Application";
import GameServer from "../src/GameServer";
import PlayRoom from "./rooms/PlayRoom";

let app: Application = new Application();

let server: GameServer = new GameServer();
server.registerRoom('play_room', PlayRoom);

app.setServer(server);
app.listen(3000);