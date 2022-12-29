export const DEFAULT_ORDER_COUNT = 1;

export function computeOrderLimitaionText(minimumOrderCount: number): string {
    return 'Заказ от ' + minimumOrderCount + ' шт.';
};