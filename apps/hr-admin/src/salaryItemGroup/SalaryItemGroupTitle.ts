import { SalaryItemGroup as TSalaryItemGroup } from "../api/salaryItemGroup/SalaryItemGroup";

export const SALARYITEMGROUP_TITLE_FIELD = "name";

export const SalaryItemGroupTitle = (record: TSalaryItemGroup): string => {
  return record.name?.toString() || String(record.id);
};
