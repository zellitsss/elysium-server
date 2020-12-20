var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.setServer = function (server) {
        this._server = server;
    };
    Application.prototype.listen = function (port) {
        this._server.listen(port);
    };
    return Application;
}());
export { Application };
//# sourceMappingURL=Application.js.map