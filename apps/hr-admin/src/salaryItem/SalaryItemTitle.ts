import { SalaryItem as TSalaryItem } from "../api/salaryItem/SalaryItem";

export const SALARYITEM_TITLE_FIELD = "name";

export const SalaryItemTitle = (record: TSalaryItem): string => {
  return record.name?.toString() || String(record.id);
};
