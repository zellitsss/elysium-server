import { nanoid } from "nanoid";
import * as $protobuf from 'protobufjs/minimal';

export class Utils {
    static generateID(): string {
        return nanoid(6);
    }
}

export function GetMessageType(message: Buffer): number {
    let reader: $protobuf.Reader = $protobuf.Reader.create(message);
    // let end = length === undefined ? reader.len : reader.pos + length;
    let tag = reader.uint32();
    let msgType;
    // first order for message type
    if (tag >>> 3 === 1) {
        msgType = reader.int32();
    } else {
        msgType = -1;
    }
    return msgType;    
}