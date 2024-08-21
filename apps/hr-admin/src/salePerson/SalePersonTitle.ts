import { SalePerson as TSalePerson } from "../api/salePerson/SalePerson";

export const SALEPERSON_TITLE_FIELD = "name";

export const SalePersonTitle = (record: TSalePerson): string => {
  return record.name?.toString() || String(record.id);
};
