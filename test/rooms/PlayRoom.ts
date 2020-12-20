import { Client } from "../../src/Client";
import { Room } from "../../src/Room";
import * as Messages from '../../src/Messages/Messages';

export default class PlayRoom extends Room {

    onCreate() {
        this.onMessage('join_room', (client: Client, clientMsg: Messages.Client_JoinRoon) => {
            
        });
        this.setPatchRate(20);
    }

    onJoin() {

    }

    onLeave() {
        
    }
}