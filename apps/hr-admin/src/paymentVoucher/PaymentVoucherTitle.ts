import { PaymentVoucher as TPaymentVoucher } from "../api/paymentVoucher/PaymentVoucher";

export const PAYMENTVOUCHER_TITLE_FIELD = "statementReference";

export const PaymentVoucherTitle = (record: TPaymentVoucher): string => {
  return record.statementReference?.toString() || String(record.id);
};
