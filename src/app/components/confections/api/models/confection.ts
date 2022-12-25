export interface IConfection {
    id?: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string, // will be receving as a sep call
    minimumPortions: number,
    maximumPortions: number,
    weight: number,
	isLimited: boolean,
	minimumOrderCount?: number,
	isOutOfStock: boolean
}