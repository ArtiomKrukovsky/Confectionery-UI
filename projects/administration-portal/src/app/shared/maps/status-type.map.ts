import { StatusTitles } from "../constants/status.constants";
import { StatusType } from "../enums/status.enum";

type StatusTypeMap = { get<T extends StatusType>(type: T): string }

export const StatusTitlesByTypeMap = new Map([
    [StatusType.Canceled, StatusTitles.CANCELED],
    [StatusType.Completed, StatusTitles.COMPLETED],
    [StatusType.Requested, StatusTitles.REQUESTED],
]) as StatusTypeMap;