import { ProductionOrder } from "../productionOrder/ProductionOrder";
import { Product } from "../product/Product";
import { PurchaseReturn } from "../purchaseReturn/PurchaseReturn";
import { Purchase } from "../purchase/Purchase";
import { SaleReturn } from "../saleReturn/SaleReturn";
import { Sale } from "../sale/Sale";
import { Tenant } from "../tenant/Tenant";

export type Store = {
  addressLine1: string | null;
  allowSale: boolean;
  cellPhoneNumber: string | null;
  code: string | null;
  createdAt: Date;
  fax: string | null;
  homePhoneNumber: string | null;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  productionOrders?: Array<ProductionOrder>;
  products?: Array<Product>;
  purchaseReturns?: Array<PurchaseReturn>;
  purchases?: Array<Purchase>;
  saleReturns?: Array<SaleReturn>;
  sales?: Array<Sale>;
  street: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
