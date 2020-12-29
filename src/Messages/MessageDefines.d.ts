import * as $protobuf from "protobufjs";
/** MessageType enum. */
export enum MessageType {
    JOIN_ROOM = 0,
    LEAVE_ROOM = 1,
    PING = 2,
    GAME_STATE = 3,
    OP_END = 9,
    TEST = 10
}

/** Represents a Client_JoinRoom. */
export class Client_JoinRoom implements IClient_JoinRoom {

    /**
     * Constructs a new Client_JoinRoom.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClient_JoinRoom);

    /** Client_JoinRoom messageType. */
    public messageType: MessageType;

    /**
     * Creates a new Client_JoinRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Client_JoinRoom instance
     */
    public static create(properties?: IClient_JoinRoom): Client_JoinRoom;

    /**
     * Encodes the specified Client_JoinRoom message. Does not implicitly {@link Client_JoinRoom.verify|verify} messages.
     * @param message Client_JoinRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClient_JoinRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Client_JoinRoom message, length delimited. Does not implicitly {@link Client_JoinRoom.verify|verify} messages.
     * @param message Client_JoinRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClient_JoinRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Client_JoinRoom message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Client_JoinRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Client_JoinRoom;

    /**
     * Decodes a Client_JoinRoom message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Client_JoinRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Client_JoinRoom;

    /**
     * Verifies a Client_JoinRoom message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Client_JoinRoom message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Client_JoinRoom
     */
    public static fromObject(object: { [k: string]: any }): Client_JoinRoom;

    /**
     * Creates a plain object from a Client_JoinRoom message. Also converts values to other types if specified.
     * @param message Client_JoinRoom
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Client_JoinRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Client_JoinRoom to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Client_LeaveRoom. */
export class Client_LeaveRoom implements IClient_LeaveRoom {

    /**
     * Constructs a new Client_LeaveRoom.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClient_LeaveRoom);

    /** Client_LeaveRoom messageType. */
    public messageType: MessageType;

    /**
     * Creates a new Client_LeaveRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Client_LeaveRoom instance
     */
    public static create(properties?: IClient_LeaveRoom): Client_LeaveRoom;

    /**
     * Encodes the specified Client_LeaveRoom message. Does not implicitly {@link Client_LeaveRoom.verify|verify} messages.
     * @param message Client_LeaveRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClient_LeaveRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Client_LeaveRoom message, length delimited. Does not implicitly {@link Client_LeaveRoom.verify|verify} messages.
     * @param message Client_LeaveRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClient_LeaveRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Client_LeaveRoom message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Client_LeaveRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Client_LeaveRoom;

    /**
     * Decodes a Client_LeaveRoom message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Client_LeaveRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Client_LeaveRoom;

    /**
     * Verifies a Client_LeaveRoom message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Client_LeaveRoom message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Client_LeaveRoom
     */
    public static fromObject(object: { [k: string]: any }): Client_LeaveRoom;

    /**
     * Creates a plain object from a Client_LeaveRoom message. Also converts values to other types if specified.
     * @param message Client_LeaveRoom
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Client_LeaveRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Client_LeaveRoom to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Vec2. */
export class Vec2 implements IVec2 {

    /**
     * Constructs a new Vec2.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVec2);

    /** Vec2 x. */
    public x: number;

    /** Vec2 y. */
    public y: number;

    /**
     * Creates a new Vec2 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Vec2 instance
     */
    public static create(properties?: IVec2): Vec2;

    /**
     * Encodes the specified Vec2 message. Does not implicitly {@link Vec2.verify|verify} messages.
     * @param message Vec2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVec2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Vec2 message, length delimited. Does not implicitly {@link Vec2.verify|verify} messages.
     * @param message Vec2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVec2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Vec2 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Vec2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Vec2;

    /**
     * Decodes a Vec2 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Vec2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Vec2;

    /**
     * Verifies a Vec2 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Vec2 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Vec2
     */
    public static fromObject(object: { [k: string]: any }): Vec2;

    /**
     * Creates a plain object from a Vec2 message. Also converts values to other types if specified.
     * @param message Vec2
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Vec2, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Vec2 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a PlayerState. */
export class PlayerState implements IPlayerState {

    /**
     * Constructs a new PlayerState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerState);

    /** PlayerState id. */
    public id: string;

    /** PlayerState name. */
    public name: string;

    /** PlayerState position. */
    public position?: (IVec2|null);

    /**
     * Creates a new PlayerState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerState instance
     */
    public static create(properties?: IPlayerState): PlayerState;

    /**
     * Encodes the specified PlayerState message. Does not implicitly {@link PlayerState.verify|verify} messages.
     * @param message PlayerState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerState message, length delimited. Does not implicitly {@link PlayerState.verify|verify} messages.
     * @param message PlayerState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerState;

    /**
     * Decodes a PlayerState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerState;

    /**
     * Verifies a PlayerState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerState
     */
    public static fromObject(object: { [k: string]: any }): PlayerState;

    /**
     * Creates a plain object from a PlayerState message. Also converts values to other types if specified.
     * @param message PlayerState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a GameState. */
export class GameState implements IGameState {

    /**
     * Constructs a new GameState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameState);

    /** GameState mesageType. */
    public mesageType: MessageType;

    /** GameState players. */
    public players: IPlayerState[];

    /**
     * Creates a new GameState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameState instance
     */
    public static create(properties?: IGameState): GameState;

    /**
     * Encodes the specified GameState message. Does not implicitly {@link GameState.verify|verify} messages.
     * @param message GameState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GameState message, length delimited. Does not implicitly {@link GameState.verify|verify} messages.
     * @param message GameState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGameState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState;

    /**
     * Decodes a GameState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameState;

    /**
     * Verifies a GameState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GameState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameState
     */
    public static fromObject(object: { [k: string]: any }): GameState;

    /**
     * Creates a plain object from a GameState message. Also converts values to other types if specified.
     * @param message GameState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GameState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a Client_Test. */
export class Client_Test implements IClient_Test {

    /**
     * Constructs a new Client_Test.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClient_Test);

    /** Client_Test messageType. */
    public messageType: MessageType;

    /** Client_Test text. */
    public text: string;

    /**
     * Creates a new Client_Test instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Client_Test instance
     */
    public static create(properties?: IClient_Test): Client_Test;

    /**
     * Encodes the specified Client_Test message. Does not implicitly {@link Client_Test.verify|verify} messages.
     * @param message Client_Test message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClient_Test, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Client_Test message, length delimited. Does not implicitly {@link Client_Test.verify|verify} messages.
     * @param message Client_Test message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClient_Test, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Client_Test message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Client_Test
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Client_Test;

    /**
     * Decodes a Client_Test message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Client_Test
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Client_Test;

    /**
     * Verifies a Client_Test message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Client_Test message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Client_Test
     */
    public static fromObject(object: { [k: string]: any }): Client_Test;

    /**
     * Creates a plain object from a Client_Test message. Also converts values to other types if specified.
     * @param message Client_Test
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Client_Test, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Client_Test to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
