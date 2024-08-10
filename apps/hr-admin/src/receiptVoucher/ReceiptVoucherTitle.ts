import { ReceiptVoucher as TReceiptVoucher } from "../api/receiptVoucher/ReceiptVoucher";

export const RECEIPTVOUCHER_TITLE_FIELD = "chequeNumber";

export const ReceiptVoucherTitle = (record: TReceiptVoucher): string => {
  return record.chequeNumber?.toString() || String(record.id);
};
