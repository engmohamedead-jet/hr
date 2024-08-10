import { IncomeItem as TIncomeItem } from "../api/incomeItem/IncomeItem";

export const INCOMEITEM_TITLE_FIELD = "name";

export const IncomeItemTitle = (record: TIncomeItem): string => {
  return record.name?.toString() || String(record.id);
};
