import * as $protobuf from "protobufjs";
/** MessageType enum. */
export enum MessageType {
    JOIN_ROOM = 10,
    LEAVE_ROOM = 11
}

/** Represents a Client_JoinRoon. */
export class Client_JoinRoon implements IClient_JoinRoon {

    /**
     * Constructs a new Client_JoinRoon.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClient_JoinRoon);

    /** Client_JoinRoon roomName. */
    public roomName: string;

    /** Client_JoinRoon roomID. */
    public roomID: string;

    /**
     * Creates a new Client_JoinRoon instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Client_JoinRoon instance
     */
    public static create(properties?: IClient_JoinRoon): Client_JoinRoon;

    /**
     * Encodes the specified Client_JoinRoon message. Does not implicitly {@link Client_JoinRoon.verify|verify} messages.
     * @param message Client_JoinRoon message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClient_JoinRoon, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Client_JoinRoon message, length delimited. Does not implicitly {@link Client_JoinRoon.verify|verify} messages.
     * @param message Client_JoinRoon message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClient_JoinRoon, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Client_JoinRoon message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Client_JoinRoon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Client_JoinRoon;

    /**
     * Decodes a Client_JoinRoon message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Client_JoinRoon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Client_JoinRoon;

    /**
     * Verifies a Client_JoinRoon message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Client_JoinRoon message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Client_JoinRoon
     */
    public static fromObject(object: { [k: string]: any }): Client_JoinRoon;

    /**
     * Creates a plain object from a Client_JoinRoon message. Also converts values to other types if specified.
     * @param message Client_JoinRoon
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Client_JoinRoon, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Client_JoinRoon to JSON.
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

    /** Client_LeaveRoom roomID. */
    public roomID: string;

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
