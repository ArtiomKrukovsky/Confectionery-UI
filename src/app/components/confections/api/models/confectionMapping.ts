import { ConfectionType } from "../enums/confection-type.enum";
import { IConfection } from "./confection";

export interface IConfectionMapping {
    confetionType: ConfectionType,
    confetions: IConfection[]
}