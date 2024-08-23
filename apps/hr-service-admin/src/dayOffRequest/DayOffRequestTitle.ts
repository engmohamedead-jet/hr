import { DayOffRequest as TDayOffRequest } from "../api/dayOffRequest/DayOffRequest";

export const DAYOFFREQUEST_TITLE_FIELD = "id";

export const DayOffRequestTitle = (record: TDayOffRequest): string => {
  return record.id?.toString() || String(record.id);
};
