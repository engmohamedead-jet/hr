import { ProductionOrder } from "../productionOrder/ProductionOrder";
import { Product } from "../product/Product";
import { PurchaseReturn } from "../purchaseReturn/PurchaseReturn";
import { Purchase } from "../purchase/Purchase";
import { SaleOrder } from "../saleOrder/SaleOrder";
import { SaleReturn } from "../saleReturn/SaleReturn";
import { Sale } from "../sale/Sale";
import { StoreLocation } from "../storeLocation/StoreLocation";
import { StoreType } from "../storeType/StoreType";
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
  saleOrders?: Array<SaleOrder>;
  saleReturns?: Array<SaleReturn>;
  sales?: Array<Sale>;
  storeLocations?: Array<StoreLocation>;
  storeTypId?: StoreType | null;
  street: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
