import { PurchaseReturn } from "../purchaseReturn/PurchaseReturn";
import { Purchase } from "../purchase/Purchase";
import { SaleOrder } from "../saleOrder/SaleOrder";
import { SaleReturn } from "../saleReturn/SaleReturn";
import { Sale } from "../sale/Sale";
import { Tenant } from "../tenant/Tenant";

export type PaymentType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  purchaseReturns?: Array<PurchaseReturn>;
  purchases?: Array<Purchase>;
  saleOrders?: Array<SaleOrder>;
  saleReturns?: Array<SaleReturn>;
  sales?: Array<Sale>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
