import { PurchaseReturnDetail as TPurchaseReturnDetail } from "../api/purchaseReturnDetail/PurchaseReturnDetail";

export const PURCHASERETURNDETAIL_TITLE_FIELD = "barcode";

export const PurchaseReturnDetailTitle = (
  record: TPurchaseReturnDetail
): string => {
  return record.barcode?.toString() || String(record.id);
};
