import { PurchaseReturn as TPurchaseReturn } from "../api/purchaseReturn/PurchaseReturn";

export const PURCHASERETURN_TITLE_FIELD = "referenceNumber";

export const PurchaseReturnTitle = (record: TPurchaseReturn): string => {
  return record.referenceNumber?.toString() || String(record.id);
};
