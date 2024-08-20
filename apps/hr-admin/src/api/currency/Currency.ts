import { Customer } from "../customer/Customer";
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
  salePayments?: Array<SalePayment>;
  suppliers?: Array<Supplier>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
