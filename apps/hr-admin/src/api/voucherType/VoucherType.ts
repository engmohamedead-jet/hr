import { PaymentVoucher } from "../paymentVoucher/PaymentVoucher";
import { ReceiptVoucher } from "../receiptVoucher/ReceiptVoucher";
import { Tenant } from "../tenant/Tenant";

export type VoucherType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  paymentVouchers?: Array<PaymentVoucher>;
  receiptVouchers?: Array<ReceiptVoucher>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
