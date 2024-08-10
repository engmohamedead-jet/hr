import { ReceiptVoucher } from "../receiptVoucher/ReceiptVoucher";

export type VoucherType = {
  code: string;
  createdAt: Date;
  description: string | null;
  id: number;
  name: string;
  normalizedName: string | null;
  note: string | null;
  receiptVouchers?: Array<ReceiptVoucher>;
  updatedAt: Date;
};
