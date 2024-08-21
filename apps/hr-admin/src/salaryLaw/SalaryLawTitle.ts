import { SalaryLaw as TSalaryLaw } from "../api/salaryLaw/SalaryLaw";

export const SALARYLAW_TITLE_FIELD = "name";

export const SalaryLawTitle = (record: TSalaryLaw): string => {
  return record.name?.toString() || String(record.id);
};
