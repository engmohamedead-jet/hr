import { PaymentVoucher } from "../paymentVoucher/PaymentVoucher";
import { ReceiptVoucher } from "../receiptVoucher/ReceiptVoucher";

export type AccountTransaction = {
  code: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  paymentVouchers?: Array<PaymentVoucher>;
  receiptVouchers?: ReceiptVoucher | null;
  updatedAt: Date;
};
