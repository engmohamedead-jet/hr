import { SalePriceType as TSalePriceType } from "../api/salePriceType/SalePriceType";

export const SALEPRICETYPE_TITLE_FIELD = "name";

export const SalePriceTypeTitle = (record: TSalePriceType): string => {
  return record.name?.toString() || String(record.id);
};
