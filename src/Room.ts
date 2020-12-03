/**
 * Acting as game instance
 */
export default class Room {

    private _patchRate: number = 15;

    onCreate() {

    }

    onJoin() {

    }

    onLeave() {

    }

    onMessage(messageID: string, messageCallback: any) {

    }

    setPatchRate(patchRate: number) {
        this._patchRate = patchRate;
    }
}