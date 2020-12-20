import { Utils } from "./Utils";
/**
 * Acting as game instance
 */
var Room = /** @class */ (function () {
    function Room() {
        this._patchRate = 15;
        this._messageHandlers = {};
        this.id = Utils.generateID();
    }
    Room.prototype._onJoin = function (client, options) {
        client.attachRoomCB(this.onMessageCB.bind(this));
    };
    Room.prototype.onCreate = function () {
    };
    Room.prototype.onJoin = function () {
    };
    Room.prototype.onLeave = function () {
    };
    Room.prototype.onMessage = function (messageID, messageCallback) {
        this._messageHandlers[messageID] = messageCallback;
    };
    Room.prototype.onMessageCB = function (client, clientMsg) {
    };
    Room.prototype.setPatchRate = function (patchRate) {
        this._patchRate = patchRate;
    };
    return Room;
}());
export { Room };
//# sourceMappingURL=Room.js.map