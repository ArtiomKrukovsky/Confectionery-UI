import { ConfectionType } from "projects/administration-portal/src/app/shared/enums/confection-type.enum";
import { IConfectionPicture } from "./confection-picture";

export interface IConfection {
    id?: string,
    name: string,
    description: string,
    price: number,
    weight: number,
    confectionType: ConfectionType,
	isOrderCountLimited: boolean,
	minimumOrderCount: number,
	isOutOfStock: boolean,
    
    pictures: IConfectionPicture[]
}