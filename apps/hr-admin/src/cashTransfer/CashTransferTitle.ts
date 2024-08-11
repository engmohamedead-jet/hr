import { CashTransfer as TCashTransfer } from "../api/cashTransfer/CashTransfer";

export const CASHTRANSFER_TITLE_FIELD = "referenceNumber";

export const CashTransferTitle = (record: TCashTransfer): string => {
  return record.referenceNumber?.toString() || String(record.id);
};
