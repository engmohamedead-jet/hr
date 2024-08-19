import { SalaryItemType as TSalaryItemType } from "../api/salaryItemType/SalaryItemType";

export const SALARYITEMTYPE_TITLE_FIELD = "name";

export const SalaryItemTypeTitle = (record: TSalaryItemType): string => {
  return record.name?.toString() || String(record.id);
};
