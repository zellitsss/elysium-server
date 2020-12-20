var RoomHandler = /** @class */ (function () {
    function RoomHandler(klass, options) {
        if (options === void 0) { options = {}; }
        this._options = {};
        this._klass = klass;
        this._options = options;
    }
    RoomHandler.prototype.create = function () {
        return new this._klass(this._options);
    };
    return RoomHandler;
}());
export { RoomHandler };
//# sourceMappingURL=RoomHandler.js.map