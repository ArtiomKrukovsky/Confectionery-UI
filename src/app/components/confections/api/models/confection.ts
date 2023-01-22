import { SafeUrl } from "@angular/platform-browser";

export interface IConfection {
    id?: string,
    name: string,
    description: string,
    price: number,
    pictureUrl: SafeUrl,
    weight: number,
	isOrderCountLimited: boolean,
	minimumOrderCount: number,
	isOutOfStock: boolean
}