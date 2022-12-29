export interface IConfection {
    id?: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string, // will be receving as a sep call
    weight: number,
	isOrderCountLimited: boolean,
	minimumOrderCount: number,
	isOutOfStock: boolean
}