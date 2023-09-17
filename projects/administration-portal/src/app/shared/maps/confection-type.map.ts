import { ConfectionTitles } from "../constants/confection.constants";
import { ConfectionType } from "../enums/confection-type.enum";

type ConfectionTypeMap = { get<T extends ConfectionType>(type: T): string }

export const ConfectionTitlesByTypeMap = new Map([
    [ConfectionType.Cakes, ConfectionTitles.CAKES],
    [ConfectionType.Desserts, ConfectionTitles.DESSERTS],
    [ConfectionType.Tartelettes, ConfectionTitles.TARTELETTES],
    [ConfectionType.Marshmallow, ConfectionTitles.MARSHMALLOW],
    [ConfectionType.Marmalade, ConfectionTitles.MARMALADE]
]) as ConfectionTypeMap;