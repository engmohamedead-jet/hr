import { SalePayment } from "../salePayment/SalePayment";
import { Tenant } from "../tenant/Tenant";

export type PaymentMethod = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  salePayments?: Array<SalePayment>;
  tenant?: Tenant | null;
  updatedAt: Date;
};
