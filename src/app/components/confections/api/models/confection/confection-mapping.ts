import { ConfectionType } from "../../../../../shared/enums/confection-type.enum";
import { IConfection } from "./confection";

export interface IConfectionMapping {
    confectionType: ConfectionType,
    confections: IConfection[]
}