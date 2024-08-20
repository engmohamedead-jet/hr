import { PaymentVoucher } from "../paymentVoucher/PaymentVoucher";
import { Tenant } from "../tenant/Tenant";

export type ExpenseItem = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  paymentVouchers?: Array<PaymentVoucher>;
  tenant?: Tenant | null;
  updatedAt: Date;
};
