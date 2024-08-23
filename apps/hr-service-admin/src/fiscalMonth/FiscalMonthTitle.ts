import { FiscalMonth as TFiscalMonth } from "../api/fiscalMonth/FiscalMonth";

export const FISCALMONTH_TITLE_FIELD = "name";

export const FiscalMonthTitle = (record: TFiscalMonth): string => {
  return record.name?.toString() || String(record.id);
};
