import { TimeMode as TTimeMode } from "../api/timeMode/TimeMode";

export const TIMEMODE_TITLE_FIELD = "name";

export const TimeModeTitle = (record: TTimeMode): string => {
  return record.name?.toString() || String(record.id);
};
