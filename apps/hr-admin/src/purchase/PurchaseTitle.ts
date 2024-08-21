import { Purchase as TPurchase } from "../api/purchase/Purchase";

export const PURCHASE_TITLE_FIELD = "referenceNumber";

export const PurchaseTitle = (record: TPurchase): string => {
  return record.referenceNumber?.toString() || String(record.id);
};
