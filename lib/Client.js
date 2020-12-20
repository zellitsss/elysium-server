import { Utils } from "./Utils";
import * as Messages from './Messages/Messages';
var Client = /** @class */ (function () {
    function Client(socket, serverOperationCB) {
        this.id = '';
        this._messageHandlerCB = null;
        this._serverOperationCB = null;
        this.id = Utils.generateID();
        if (socket) {
            this.attach(socket);
        }
        if (serverOperationCB) {
            this._serverOperationCB = serverOperationCB;
        }
    }
    Client.prototype.attach = function (socket) {
        this._ws = socket;
        this._ws.on('message', this.onMessageCB.bind(this));
    };
    Client.prototype.attachRoomCB = function (messageHandlerCB) {
        this._messageHandlerCB = messageHandlerCB;
    };
    Client.prototype.onMessageCB = function (data) {
        // TODO: Add logic about determining message type
        if (false) {
            this.processOperationMessage(data);
        }
        else {
            this.processRoomMessage('join_room', data);
        }
    };
    Client.prototype.processRoomMessage = function (id, data) {
        // TODO: Extract actual room message, for now just use the original one
        this._messageHandlerCB(this, Messages.Client_JoinRoon.create());
    };
    Client.prototype.processOperationMessage = function (data) {
        this._serverOperationCB(this, data);
    };
    return Client;
}());
export { Client };
//# sourceMappingURL=Client.js.map