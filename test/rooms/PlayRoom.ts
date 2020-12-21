import { Client } from "../../src/Client";
import { Room } from "../../src/Room";
import * as MessageDefines from '../../src/Messages/MessageDefines';

export default class PlayRoom extends Room {

    onCreate() {
        this.onMessage('client_joinroom', (client: Client, message: MessageDefines.Client_JoinRoom) => {
            
        });
        this.setPatchRate(20);
    }

    onJoin() {

    }

    onLeave() {
        
    }
}