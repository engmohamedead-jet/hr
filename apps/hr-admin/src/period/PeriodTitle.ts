import { Period as TPeriod } from "../api/period/Period";

export const PERIOD_TITLE_FIELD = "name";

export const PeriodTitle = (record: TPeriod): string => {
  return record.name?.toString() || String(record.id);
};
