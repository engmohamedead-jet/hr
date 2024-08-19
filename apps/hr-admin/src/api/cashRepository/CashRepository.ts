import { PurchaseReturn } from "../purchaseReturn/PurchaseReturn";
import { Purchase } from "../purchase/Purchase";
import { SaleReturn } from "../saleReturn/SaleReturn";
import { Sale } from "../sale/Sale";
import { Tenant } from "../tenant/Tenant";

export type CashRepository = {
  cashRepositories?: Array<CashRepository>;
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  parentCashRepositoryId?: CashRepository | null;
  purchaseReturns?: Array<PurchaseReturn>;
  purchases?: Purchase | null;
  saleReturns?: Array<SaleReturn>;
  sales?: Array<Sale>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
