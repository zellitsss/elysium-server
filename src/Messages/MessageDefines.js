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
     * @property {number} PING=2 PING value
     * @property {number} GAME_STATE=3 GAME_STATE value
     * @property {number} OP_END=9 OP_END value
     * @property {number} TEST=10 TEST value
     */
    $root.MessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "JOIN_ROOM"] = 0;
        values[valuesById[1] = "LEAVE_ROOM"] = 1;
        values[valuesById[2] = "PING"] = 2;
        values[valuesById[3] = "GAME_STATE"] = 3;
        values[valuesById[9] = "OP_END"] = 9;
        values[valuesById[10] = "TEST"] = 10;
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
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
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
                case 1:
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
                case 2:
                case 3:
                case 9:
                case 10:
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
            case "PING":
            case 2:
                message.messageType = 2;
                break;
            case "GAME_STATE":
            case 3:
                message.messageType = 3;
                break;
            case "OP_END":
            case 9:
                message.messageType = 9;
                break;
            case "TEST":
            case 10:
                message.messageType = 10;
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
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
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
                case 2:
                case 3:
                case 9:
                case 10:
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
            case "PING":
            case 2:
                message.messageType = 2;
                break;
            case "GAME_STATE":
            case 3:
                message.messageType = 3;
                break;
            case "OP_END":
            case 9:
                message.messageType = 9;
                break;
            case "TEST":
            case 10:
                message.messageType = 10;
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
    
    $root.GameState = (function() {
    
        /**
         * Properties of a GameState.
         * @exports IGameState
         * @interface IGameState
         * @property {MessageType|null} [mesageType] GameState mesageType
         */
    
        /**
         * Constructs a new GameState.
         * @exports GameState
         * @classdesc Represents a GameState.
         * @implements IGameState
         * @constructor
         * @param {IGameState=} [properties] Properties to set
         */
        function GameState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * GameState mesageType.
         * @member {MessageType} mesageType
         * @memberof GameState
         * @instance
         */
        GameState.prototype.mesageType = 0;
    
        /**
         * Creates a new GameState instance using the specified properties.
         * @function create
         * @memberof GameState
         * @static
         * @param {IGameState=} [properties] Properties to set
         * @returns {GameState} GameState instance
         */
        GameState.create = function create(properties) {
            return new GameState(properties);
        };
    
        /**
         * Encodes the specified GameState message. Does not implicitly {@link GameState.verify|verify} messages.
         * @function encode
         * @memberof GameState
         * @static
         * @param {IGameState} message GameState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mesageType != null && Object.hasOwnProperty.call(message, "mesageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mesageType);
            return writer;
        };
    
        /**
         * Encodes the specified GameState message, length delimited. Does not implicitly {@link GameState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameState
         * @static
         * @param {IGameState} message GameState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a GameState message from the specified reader or buffer.
         * @function decode
         * @memberof GameState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState} GameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mesageType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a GameState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameState} GameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a GameState message.
         * @function verify
         * @memberof GameState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mesageType != null && message.hasOwnProperty("mesageType"))
                switch (message.mesageType) {
                default:
                    return "mesageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 9:
                case 10:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a GameState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameState} GameState
         */
        GameState.fromObject = function fromObject(object) {
            if (object instanceof $root.GameState)
                return object;
            var message = new $root.GameState();
            switch (object.mesageType) {
            case "JOIN_ROOM":
            case 0:
                message.mesageType = 0;
                break;
            case "LEAVE_ROOM":
            case 1:
                message.mesageType = 1;
                break;
            case "PING":
            case 2:
                message.mesageType = 2;
                break;
            case "GAME_STATE":
            case 3:
                message.mesageType = 3;
                break;
            case "OP_END":
            case 9:
                message.mesageType = 9;
                break;
            case "TEST":
            case 10:
                message.mesageType = 10;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a GameState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameState
         * @static
         * @param {GameState} message GameState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mesageType = options.enums === String ? "JOIN_ROOM" : 0;
            if (message.mesageType != null && message.hasOwnProperty("mesageType"))
                object.mesageType = options.enums === String ? $root.MessageType[message.mesageType] : message.mesageType;
            return object;
        };
    
        /**
         * Converts this GameState to JSON.
         * @function toJSON
         * @memberof GameState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return GameState;
    })();
    
    $root.Client_Test = (function() {
    
        /**
         * Properties of a Client_Test.
         * @exports IClient_Test
         * @interface IClient_Test
         * @property {MessageType|null} [messageType] Client_Test messageType
         * @property {string|null} [text] Client_Test text
         */
    
        /**
         * Constructs a new Client_Test.
         * @exports Client_Test
         * @classdesc Represents a Client_Test.
         * @implements IClient_Test
         * @constructor
         * @param {IClient_Test=} [properties] Properties to set
         */
        function Client_Test(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Client_Test messageType.
         * @member {MessageType} messageType
         * @memberof Client_Test
         * @instance
         */
        Client_Test.prototype.messageType = 0;
    
        /**
         * Client_Test text.
         * @member {string} text
         * @memberof Client_Test
         * @instance
         */
        Client_Test.prototype.text = "";
    
        /**
         * Creates a new Client_Test instance using the specified properties.
         * @function create
         * @memberof Client_Test
         * @static
         * @param {IClient_Test=} [properties] Properties to set
         * @returns {Client_Test} Client_Test instance
         */
        Client_Test.create = function create(properties) {
            return new Client_Test(properties);
        };
    
        /**
         * Encodes the specified Client_Test message. Does not implicitly {@link Client_Test.verify|verify} messages.
         * @function encode
         * @memberof Client_Test
         * @static
         * @param {IClient_Test} message Client_Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Client_Test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            return writer;
        };
    
        /**
         * Encodes the specified Client_Test message, length delimited. Does not implicitly {@link Client_Test.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Client_Test
         * @static
         * @param {IClient_Test} message Client_Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Client_Test.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Client_Test message from the specified reader or buffer.
         * @function decode
         * @memberof Client_Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Client_Test} Client_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Client_Test.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Client_Test();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageType = reader.int32();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Client_Test message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Client_Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Client_Test} Client_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Client_Test.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Client_Test message.
         * @function verify
         * @memberof Client_Test
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Client_Test.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 9:
                case 10:
                    break;
                }
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };
    
        /**
         * Creates a Client_Test message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Client_Test
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Client_Test} Client_Test
         */
        Client_Test.fromObject = function fromObject(object) {
            if (object instanceof $root.Client_Test)
                return object;
            var message = new $root.Client_Test();
            switch (object.messageType) {
            case "JOIN_ROOM":
            case 0:
                message.messageType = 0;
                break;
            case "LEAVE_ROOM":
            case 1:
                message.messageType = 1;
                break;
            case "PING":
            case 2:
                message.messageType = 2;
                break;
            case "GAME_STATE":
            case 3:
                message.messageType = 3;
                break;
            case "OP_END":
            case 9:
                message.messageType = 9;
                break;
            case "TEST":
            case 10:
                message.messageType = 10;
                break;
            }
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };
    
        /**
         * Creates a plain object from a Client_Test message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Client_Test
         * @static
         * @param {Client_Test} message Client_Test
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Client_Test.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.messageType = options.enums === String ? "JOIN_ROOM" : 0;
                object.text = "";
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.MessageType[message.messageType] : message.messageType;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };
    
        /**
         * Converts this Client_Test to JSON.
         * @function toJSON
         * @memberof Client_Test
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Client_Test.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Client_Test;
    })();

    return $root;
});
