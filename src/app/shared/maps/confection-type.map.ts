import { ConfectionRoutes, ConfectionTitles } from "../constants/confection.constants";
import { ConfectionType } from "../enums/confection-type.enum";

type ConfectionTypeMap = { get<T extends ConfectionType>(type: T): string }

export const ConfectionTitlesByTypeMap = new Map([
    [ConfectionType.Cakes, ConfectionTitles.CAKES],
    [ConfectionType.Desserts, ConfectionTitles.DESSERTS],
    [ConfectionType.Tartelettes, ConfectionTitles.TARTELETTES],
    [ConfectionType.Meringue, ConfectionTitles.MERINGUE],
    [ConfectionType.Marshmallow, ConfectionTitles.MARSHMALLOW],
    [ConfectionType.Marmalade, ConfectionTitles.MARMALADE],
]) as ConfectionTypeMap;

export const ConfectionRoutesByTypeMap = new Map([
    [ConfectionType.Cakes, ConfectionRoutes.CAKES],
    [ConfectionType.Desserts, ConfectionRoutes.DESSERTS],
    [ConfectionType.Tartelettes, ConfectionRoutes.TARTELETTES],
    [ConfectionType.Meringue, ConfectionRoutes.MERINGUE],
    [ConfectionType.Marshmallow, ConfectionRoutes.MARSHMALLOW],
    [ConfectionType.Marmalade, ConfectionRoutes.MARMALADE],
]) as ConfectionTypeMap;