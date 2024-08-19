import { PurchasePriceType as TPurchasePriceType } from "../api/purchasePriceType/PurchasePriceType";

export const PURCHASEPRICETYPE_TITLE_FIELD = "name";

export const PurchasePriceTypeTitle = (record: TPurchasePriceType): string => {
  return record.name?.toString() || String(record.id);
};
