import { FiscalMonth as TFiscalMonth } from "../api/fiscalMonth/FiscalMonth";

export const FISCALMONTH_TITLE_FIELD = "mormalizedName";

export const FiscalMonthTitle = (record: TFiscalMonth): string => {
  return record.mormalizedName?.toString() || String(record.id);
};
