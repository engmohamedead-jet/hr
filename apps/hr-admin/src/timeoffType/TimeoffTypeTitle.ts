import { TimeoffType as TTimeoffType } from "../api/timeoffType/TimeoffType";

export const TIMEOFFTYPE_TITLE_FIELD = "name";

export const TimeoffTypeTitle = (record: TTimeoffType): string => {
  return record.name?.toString() || String(record.id);
};
