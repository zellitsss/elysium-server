import Room from "../../src/Room";

export default class PlayRoom extends Room {
    onCreate() {
        this.onMessage('move', (client, message) => {

        });
        this.setPatchRate(20);
    }

    onJoin() {

    }

    onLeave() {
        
    }
}