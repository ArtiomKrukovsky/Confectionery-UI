import { ConfectionType } from "src/app/components/confections/api/enums/confection-type.enum";

const Cake = 'Торты';
const Dessert = 'Пироженые';
const Tartlet = 'Тарталетки';
const Meringue = 'Меренга';
const Marshmallow = 'Зефир';
const Marmalade = 'Мармелад';

type ConfectionTypeMap = { get<T extends ConfectionType>(type: T): string }

export const ConfectionTypeMap = new Map([
    [ConfectionType.Cake, Cake],
    [ConfectionType.Dessert, Dessert],
    [ConfectionType.Tartlet, Tartlet],
    [ConfectionType.Meringue, Meringue],
    [ConfectionType.Marshmallow, Marshmallow],
    [ConfectionType.Marmalade, Marmalade],
]) as ConfectionTypeMap;