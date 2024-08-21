import { PurchaseDetail as TPurchaseDetail } from "../api/purchaseDetail/PurchaseDetail";

export const PURCHASEDETAIL_TITLE_FIELD = "barcode";

export const PurchaseDetailTitle = (record: TPurchaseDetail): string => {
  return record.barcode?.toString() || String(record.id);
};
