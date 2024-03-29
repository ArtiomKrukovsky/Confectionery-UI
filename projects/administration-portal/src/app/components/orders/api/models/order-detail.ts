import { StatusType } from "projects/administration-portal/src/app/shared/enums/status-type.enum";

export interface IOrderDetail {
    id: string,
    customerName: string,
    productName: string,
    status: StatusType,
    createdDate: string,
    unitPrice: number,
    quantity: number
}