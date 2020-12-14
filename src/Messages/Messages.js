/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    /**
     * MessageType enum.
     * @exports MessageType
     * @enum {number}
     * @property {number} JOIN_ROOM=10 JOIN_ROOM value
     * @property {number} LEAVE_ROOM=11 LEAVE_ROOM value
     */
    $root.MessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[10] = "JOIN_ROOM"] = 10;
        values[valuesById[11] = "LEAVE_ROOM"] = 11;
        return values;
    })();
    
    $root.Client_JoinRoon = (function() {
    
        /**
         * Properties of a Client_JoinRoon.
         * @exports IClient_JoinRoon
         * @interface IClient_JoinRoon
         * @property {string|null} [roomName] Client_JoinRoon roomName
         * @property {string|null} [roomID] Client_JoinRoon roomID
         */
    
        /**
         * Constructs a new Client_JoinRoon.
         * @exports Client_JoinRoon
         * @classdesc Represents a Client_JoinRoon.
         * @implements IClient_JoinRoon
         * @constructor
         * @param {IClient_JoinRoon=} [properties] Properties to set
         */
        function Client_JoinRoon(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Client_JoinRoon roomName.
         * @member {string} roomName
         * @memberof Client_JoinRoon
         * @instance
         */
        Client_JoinRoon.prototype.roomName = "";
    
        /**
         * Client_JoinRoon roomID.
         * @member {string} roomID
         * @memberof Client_JoinRoon
         * @instance
         */
        Client_JoinRoon.prototype.roomID = "";
    
        /**
         * Creates a new Client_JoinRoon instance using the specified properties.
         * @function create
         * @memberof Client_JoinRoon
         * @static
         * @param {IClient_JoinRoon=} [properties] Properties to set
         * @returns {Client_JoinRoon} Client_JoinRoon instance
         */
        Client_JoinRoon.create = function create(properties) {
            return new Client_JoinRoon(properties);
        };
    
        /**
         * Encodes the specified Client_JoinRoon message. Does not implicitly {@link Client_JoinRoon.verify|verify} messages.
         * @function encode
         * @memberof Client_JoinRoon
         * @static
         * @param {IClient_JoinRoon} message Client_JoinRoon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Client_JoinRoon.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomName != null && Object.hasOwnProperty.call(message, "roomName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomName);
            if (message.roomID != null && Object.hasOwnProperty.call(message, "roomID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomID);
            return writer;
        };
    
        /**
         * Encodes the specified Client_JoinRoon message, length delimited. Does not implicitly {@link Client_JoinRoon.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Client_JoinRoon
         * @static
         * @param {IClient_JoinRoon} message Client_JoinRoon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Client_JoinRoon.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Client_JoinRoon message from the specified reader or buffer.
         * @function decode
         * @memberof Client_JoinRoon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Client_JoinRoon} Client_JoinRoon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Client_JoinRoon.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Client_JoinRoon();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomName = reader.string();
                    break;
                case 2:
                    message.roomID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Client_JoinRoon message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Client_JoinRoon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Client_JoinRoon} Client_JoinRoon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Client_JoinRoon.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Client_JoinRoon message.
         * @function verify
         * @memberof Client_JoinRoon
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Client_JoinRoon.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                if (!$util.isString(message.roomName))
                    return "roomName: string expected";
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                if (!$util.isString(message.roomID))
                    return "roomID: string expected";
            return null;
        };
    
        /**
         * Creates a Client_JoinRoon message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Client_JoinRoon
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Client_JoinRoon} Client_JoinRoon
         */
        Client_JoinRoon.fromObject = function fromObject(object) {
            if (object instanceof $root.Client_JoinRoon)
                return object;
            var message = new $root.Client_JoinRoon();
            if (object.roomName != null)
                message.roomName = String(object.roomName);
            if (object.roomID != null)
                message.roomID = String(object.roomID);
            return message;
        };
    
        /**
         * Creates a plain object from a Client_JoinRoon message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Client_JoinRoon
         * @static
         * @param {Client_JoinRoon} message Client_JoinRoon
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Client_JoinRoon.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomName = "";
                object.roomID = "";
            }
            if (message.roomName != null && message.hasOwnProperty("roomName"))
                object.roomName = message.roomName;
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                object.roomID = message.roomID;
            return object;
        };
    
        /**
         * Converts this Client_JoinRoon to JSON.
         * @function toJSON
         * @memberof Client_JoinRoon
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Client_JoinRoon.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Client_JoinRoon;
    })();
    
    $root.Client_LeaveRoom = (function() {
    
        /**
         * Properties of a Client_LeaveRoom.
         * @exports IClient_LeaveRoom
         * @interface IClient_LeaveRoom
         * @property {string|null} [roomID] Client_LeaveRoom roomID
         */
    
        /**
         * Constructs a new Client_LeaveRoom.
         * @exports Client_LeaveRoom
         * @classdesc Represents a Client_LeaveRoom.
         * @implements IClient_LeaveRoom
         * @constructor
         * @param {IClient_LeaveRoom=} [properties] Properties to set
         */
        function Client_LeaveRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Client_LeaveRoom roomID.
         * @member {string} roomID
         * @memberof Client_LeaveRoom
         * @instance
         */
        Client_LeaveRoom.prototype.roomID = "";
    
        /**
         * Creates a new Client_LeaveRoom instance using the specified properties.
         * @function create
         * @memberof Client_LeaveRoom
         * @static
         * @param {IClient_LeaveRoom=} [properties] Properties to set
         * @returns {Client_LeaveRoom} Client_LeaveRoom instance
         */
        Client_LeaveRoom.create = function create(properties) {
            return new Client_LeaveRoom(properties);
        };
    
        /**
         * Encodes the specified Client_LeaveRoom message. Does not implicitly {@link Client_LeaveRoom.verify|verify} messages.
         * @function encode
         * @memberof Client_LeaveRoom
         * @static
         * @param {IClient_LeaveRoom} message Client_LeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Client_LeaveRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomID != null && Object.hasOwnProperty.call(message, "roomID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomID);
            return writer;
        };
    
        /**
         * Encodes the specified Client_LeaveRoom message, length delimited. Does not implicitly {@link Client_LeaveRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Client_LeaveRoom
         * @static
         * @param {IClient_LeaveRoom} message Client_LeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Client_LeaveRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Client_LeaveRoom message from the specified reader or buffer.
         * @function decode
         * @memberof Client_LeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Client_LeaveRoom} Client_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Client_LeaveRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Client_LeaveRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Client_LeaveRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Client_LeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Client_LeaveRoom} Client_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Client_LeaveRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Client_LeaveRoom message.
         * @function verify
         * @memberof Client_LeaveRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Client_LeaveRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                if (!$util.isString(message.roomID))
                    return "roomID: string expected";
            return null;
        };
    
        /**
         * Creates a Client_LeaveRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Client_LeaveRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Client_LeaveRoom} Client_LeaveRoom
         */
        Client_LeaveRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.Client_LeaveRoom)
                return object;
            var message = new $root.Client_LeaveRoom();
            if (object.roomID != null)
                message.roomID = String(object.roomID);
            return message;
        };
    
        /**
         * Creates a plain object from a Client_LeaveRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Client_LeaveRoom
         * @static
         * @param {Client_LeaveRoom} message Client_LeaveRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Client_LeaveRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.roomID = "";
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                object.roomID = message.roomID;
            return object;
        };
    
        /**
         * Converts this Client_LeaveRoom to JSON.
         * @function toJSON
         * @memberof Client_LeaveRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Client_LeaveRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Client_LeaveRoom;
    })();

    return $root;
});
