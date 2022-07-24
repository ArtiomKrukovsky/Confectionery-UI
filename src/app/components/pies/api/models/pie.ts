import { IIngredient } from "./ingredient";

export interface IPie {
    id: string,
    name: string,
    description: string,
    price: number,
    minimumPortions: number,
    maximumPortions: number,
    ingredients: IIngredient[]
}