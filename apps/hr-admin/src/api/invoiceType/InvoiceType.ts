import { PurchaseReturn } from "../purchaseReturn/PurchaseReturn";
import { Purchase } from "../purchase/Purchase";
import { SaleReturn } from "../saleReturn/SaleReturn";
import { Sale } from "../sale/Sale";
import { Tenant } from "../tenant/Tenant";

export type InvoiceType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  purchaseReturns?: Array<PurchaseReturn>;
  purchases?: Array<Purchase>;
  saleReturns?: Array<SaleReturn>;
  sales?: Array<Sale>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
