import { Decimal } from "decimal.js";
import { Currency } from "../currency/Currency";
import { Customer } from "../customer/Customer";
import { PurchaseReturn } from "../purchaseReturn/PurchaseReturn";
import { Purchase } from "../purchase/Purchase";
import { Tenant } from "../tenant/Tenant";

export type Supplier = {
  address: string | null;
  code: string | null;
  createdAt: Date;
  credit: Decimal | null;
  currency?: Currency | null;
  customerId?: Customer | null;
  debit: Decimal | null;
  description: string | null;
  email: string | null;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  phoneNumber: string | null;
  purchaseReturns?: Array<PurchaseReturn>;
  purchases?: Array<Purchase>;
  tenantId?: Tenant | null;
  updatedAt: Date;
  website: string | null;
};
