import { nanoid } from "nanoid";

export default class Utils {
    static generateID(): string {
        return nanoid(6);
    }
}