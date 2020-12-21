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
     * @property {number} JOIN_ROOM=0 JOIN_ROOM value
     * @property {number} LEAVE_ROOM=1 LEAVE_ROOM value
     */
    $root.MessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "JOIN_ROOM"] = 0;
        values[valuesById[1] = "LEAVE_ROOM"] = 1;
        return values;
    })();
    
    $root.Client_JoinRoom = (function() {
    
        /**
         * Properties of a Client_JoinRoom.
         * @exports IClient_JoinRoom
         * @interface IClient_JoinRoom
         * @property {MessageType|null} [messageType] Client_JoinRoom messageType
         */
    
        /**
         * Constructs a new Client_JoinRoom.
         * @exports Client_JoinRoom
         * @classdesc Represents a Client_JoinRoom.
         * @implements IClient_JoinRoom
         * @constructor
         * @param {IClient_JoinRoom=} [properties] Properties to set
         */
        function Client_JoinRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Client_JoinRoom messageType.
         * @member {MessageType} messageType
         * @memberof Client_JoinRoom
         * @instance
         */
        Client_JoinRoom.prototype.messageType = 0;
    
        /**
         * Creates a new Client_JoinRoom instance using the specified properties.
         * @function create
         * @memberof Client_JoinRoom
         * @static
         * @param {IClient_JoinRoom=} [properties] Properties to set
         * @returns {Client_JoinRoom} Client_JoinRoom instance
         */
        Client_JoinRoom.create = function create(properties) {
            return new Client_JoinRoom(properties);
        };
    
        /**
         * Encodes the specified Client_JoinRoom message. Does not implicitly {@link Client_JoinRoom.verify|verify} messages.
         * @function encode
         * @memberof Client_JoinRoom
         * @static
         * @param {IClient_JoinRoom} message Client_JoinRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Client_JoinRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.messageType);
            return writer;
        };
    
        /**
         * Encodes the specified Client_JoinRoom message, length delimited. Does not implicitly {@link Client_JoinRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Client_JoinRoom
         * @static
         * @param {IClient_JoinRoom} message Client_JoinRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Client_JoinRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Client_JoinRoom message from the specified reader or buffer.
         * @function decode
         * @memberof Client_JoinRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Client_JoinRoom} Client_JoinRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Client_JoinRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Client_JoinRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.messageType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Client_JoinRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Client_JoinRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Client_JoinRoom} Client_JoinRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Client_JoinRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Client_JoinRoom message.
         * @function verify
         * @memberof Client_JoinRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Client_JoinRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a Client_JoinRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Client_JoinRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Client_JoinRoom} Client_JoinRoom
         */
        Client_JoinRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.Client_JoinRoom)
                return object;
            var message = new $root.Client_JoinRoom();
            switch (object.messageType) {
            case "JOIN_ROOM":
            case 0:
                message.messageType = 0;
                break;
            case "LEAVE_ROOM":
            case 1:
                message.messageType = 1;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Client_JoinRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Client_JoinRoom
         * @static
         * @param {Client_JoinRoom} message Client_JoinRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Client_JoinRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.messageType = options.enums === String ? "JOIN_ROOM" : 0;
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.MessageType[message.messageType] : message.messageType;
            return object;
        };
    
        /**
         * Converts this Client_JoinRoom to JSON.
         * @function toJSON
         * @memberof Client_JoinRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Client_JoinRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Client_JoinRoom;
    })();
    
    $root.Client_LeaveRoom = (function() {
    
        /**
         * Properties of a Client_LeaveRoom.
         * @exports IClient_LeaveRoom
         * @interface IClient_LeaveRoom
         * @property {MessageType|null} [messageType] Client_LeaveRoom messageType
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
         * Client_LeaveRoom messageType.
         * @member {MessageType} messageType
         * @memberof Client_LeaveRoom
         * @instance
         */
        Client_LeaveRoom.prototype.messageType = 0;
    
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
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.messageType);
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
                case 0:
                    message.messageType = reader.int32();
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
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                    break;
                }
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
            switch (object.messageType) {
            case "JOIN_ROOM":
            case 0:
                message.messageType = 0;
                break;
            case "LEAVE_ROOM":
            case 1:
                message.messageType = 1;
                break;
            }
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
                object.messageType = options.enums === String ? "JOIN_ROOM" : 0;
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.MessageType[message.messageType] : message.messageType;
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
    
    $root.Client_Move = (function() {
    
        /**
         * Properties of a Client_Move.
         * @exports IClient_Move
         * @interface IClient_Move
         * @property {MessageType|null} [messageType] Client_Move messageType
         * @property {number|null} [moveX] Client_Move moveX
         * @property {number|null} [moveY] Client_Move moveY
         */
    
        /**
         * Constructs a new Client_Move.
         * @exports Client_Move
         * @classdesc Represents a Client_Move.
         * @implements IClient_Move
         * @constructor
         * @param {IClient_Move=} [properties] Properties to set
         */
        function Client_Move(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Client_Move messageType.
         * @member {MessageType} messageType
         * @memberof Client_Move
         * @instance
         */
        Client_Move.prototype.messageType = 0;
    
        /**
         * Client_Move moveX.
         * @member {number} moveX
         * @memberof Client_Move
         * @instance
         */
        Client_Move.prototype.moveX = 0;
    
        /**
         * Client_Move moveY.
         * @member {number} moveY
         * @memberof Client_Move
         * @instance
         */
        Client_Move.prototype.moveY = 0;
    
        /**
         * Creates a new Client_Move instance using the specified properties.
         * @function create
         * @memberof Client_Move
         * @static
         * @param {IClient_Move=} [properties] Properties to set
         * @returns {Client_Move} Client_Move instance
         */
        Client_Move.create = function create(properties) {
            return new Client_Move(properties);
        };
    
        /**
         * Encodes the specified Client_Move message. Does not implicitly {@link Client_Move.verify|verify} messages.
         * @function encode
         * @memberof Client_Move
         * @static
         * @param {IClient_Move} message Client_Move message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Client_Move.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 0, wireType 0 =*/0).int32(message.messageType);
            if (message.moveX != null && Object.hasOwnProperty.call(message, "moveX"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.moveX);
            if (message.moveY != null && Object.hasOwnProperty.call(message, "moveY"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.moveY);
            return writer;
        };
    
        /**
         * Encodes the specified Client_Move message, length delimited. Does not implicitly {@link Client_Move.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Client_Move
         * @static
         * @param {IClient_Move} message Client_Move message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Client_Move.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Client_Move message from the specified reader or buffer.
         * @function decode
         * @memberof Client_Move
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Client_Move} Client_Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Client_Move.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Client_Move();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 0:
                    message.messageType = reader.int32();
                    break;
                case 1:
                    message.moveX = reader.uint32();
                    break;
                case 2:
                    message.moveY = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Client_Move message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Client_Move
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Client_Move} Client_Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Client_Move.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Client_Move message.
         * @function verify
         * @memberof Client_Move
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Client_Move.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.moveX != null && message.hasOwnProperty("moveX"))
                if (!$util.isInteger(message.moveX))
                    return "moveX: integer expected";
            if (message.moveY != null && message.hasOwnProperty("moveY"))
                if (!$util.isInteger(message.moveY))
                    return "moveY: integer expected";
            return null;
        };
    
        /**
         * Creates a Client_Move message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Client_Move
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Client_Move} Client_Move
         */
        Client_Move.fromObject = function fromObject(object) {
            if (object instanceof $root.Client_Move)
                return object;
            var message = new $root.Client_Move();
            switch (object.messageType) {
            case "JOIN_ROOM":
            case 0:
                message.messageType = 0;
                break;
            case "LEAVE_ROOM":
            case 1:
                message.messageType = 1;
                break;
            }
            if (object.moveX != null)
                message.moveX = object.moveX >>> 0;
            if (object.moveY != null)
                message.moveY = object.moveY >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a Client_Move message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Client_Move
         * @static
         * @param {Client_Move} message Client_Move
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Client_Move.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.messageType = options.enums === String ? "JOIN_ROOM" : 0;
                object.moveX = 0;
                object.moveY = 0;
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.MessageType[message.messageType] : message.messageType;
            if (message.moveX != null && message.hasOwnProperty("moveX"))
                object.moveX = message.moveX;
            if (message.moveY != null && message.hasOwnProperty("moveY"))
                object.moveY = message.moveY;
            return object;
        };
    
        /**
         * Converts this Client_Move to JSON.
         * @function toJSON
         * @memberof Client_Move
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Client_Move.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Client_Move;
    })();

    return $root;
});
