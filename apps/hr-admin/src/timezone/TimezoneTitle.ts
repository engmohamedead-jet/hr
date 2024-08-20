import { Timezone as TTimezone } from "../api/timezone/Timezone";

export const TIMEZONE_TITLE_FIELD = "name";

export const TimezoneTitle = (record: TTimezone): string => {
  return record.name?.toString() || String(record.id);
};
