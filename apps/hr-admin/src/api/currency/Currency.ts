import { Customer } from "../customer/Customer";
import { PaymentVoucher } from "../paymentVoucher/PaymentVoucher";
import { ReceiptVoucher } from "../receiptVoucher/ReceiptVoucher";
import { SalePayment } from "../salePayment/SalePayment";
import { Supplier } from "../supplier/Supplier";
import { Tenant } from "../tenant/Tenant";

export type Currency = {
  code: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  description: string | null;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  paymentVouchers?: Array<PaymentVoucher>;
  receiptVouchers?: Array<ReceiptVoucher>;
  salePayments?: Array<SalePayment>;
  suppliers?: Array<Supplier>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
