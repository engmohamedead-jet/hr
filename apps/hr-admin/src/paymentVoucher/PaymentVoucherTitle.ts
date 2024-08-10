import { PaymentVoucher as TPaymentVoucher } from "../api/paymentVoucher/PaymentVoucher";

export const PAYMENTVOUCHER_TITLE_FIELD = "note";

export const PaymentVoucherTitle = (record: TPaymentVoucher): string => {
  return record.note?.toString() || String(record.id);
};
