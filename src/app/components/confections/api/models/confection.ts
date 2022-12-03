import { IIngredient } from "./ingredient";

export interface IConfection {
    id?: string,
    name: string,
    description: string,
    //type: string,
    price: number,
    imageUrl: string,
    minimumPortions: number,
    maximumPortions: number,
    ingredients: IIngredient[]
}