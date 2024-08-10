import { FiscalWeek as TFiscalWeek } from "../api/fiscalWeek/FiscalWeek";

export const FISCALWEEK_TITLE_FIELD = "name";

export const FiscalWeekTitle = (record: TFiscalWeek): string => {
  return record.name?.toString() || String(record.id);
};
