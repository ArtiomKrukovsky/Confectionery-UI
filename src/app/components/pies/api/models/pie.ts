import { IIngredient } from "./ingredient";

export interface IPie {
    id?: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    minimumPortions: number,
    maximumPortions: number,
    ingredients: IIngredient[]
}