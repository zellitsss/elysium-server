import { nanoid } from "nanoid";

export class Utils {
    static generateID(): string {
        return nanoid(6);
    }
}