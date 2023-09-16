import { IOrderDetail } from "../../components/orders/api/models/order-detail";
import { StatusType } from "../../shared/enums/status.enum";

export const ORDER_DETAILS : IOrderDetail[] = [
    {
        id: 'bc7bc3ed-0b88-4019-aae9-59579b6a6713',
        customerName: 'Андрей Макаров',
        productName: 'Чизкейк',
        status: StatusType.Requested,
        createdDate: '2023-01-31',
        unitPrice: 45.5,
        quantity: 2
    },
    {
        id: 'beba87bf-d11a-4f82-81e7-fe73e7289403',
        customerName: 'Юля Кронова',
        productName: 'Медовик',
        status: StatusType.Completed,
        createdDate: '2023-04-14',
        unitPrice: 70.0,
        quantity: 1
    },
    {
        id: 'fb1c68d5-6ca2-4af2-acbe-c0d9239c1248',
        customerName: 'Дмитрий Гладкий',
        productName: 'Трайфлы',
        status: StatusType.Canceled,
        createdDate: '2023-07-20',
        unitPrice: 8.0,
        quantity: 12
    },
];