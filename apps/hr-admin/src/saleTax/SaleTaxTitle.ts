import { SaleTax as TSaleTax } from "../api/saleTax/SaleTax";

export const SALETAX_TITLE_FIELD = "name";

export const SaleTaxTitle = (record: TSaleTax): string => {
  return record.name?.toString() || String(record.id);
};
