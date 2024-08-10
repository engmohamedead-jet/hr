import { CustomerCateogry as TCustomerCateogry } from "../api/customerCateogry/CustomerCateogry";

export const CUSTOMERCATEOGRY_TITLE_FIELD = "name";

export const CustomerCateogryTitle = (record: TCustomerCateogry): string => {
  return record.name?.toString() || String(record.id);
};
