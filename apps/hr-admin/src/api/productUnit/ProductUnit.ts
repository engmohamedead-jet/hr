import { Unit } from "../unit/Unit";
import { Decimal } from "decimal.js";
import { Product } from "../product/Product";
import { Tenant } from "../tenant/Tenant";

export type ProductUnit = {
  barcode: string | null;
  compareUnitId?: Unit | null;
  compareUnitQuantity: Decimal | null;
  costPrice: number | null;
  createdAt: Date;
  id: string;
  isActive: boolean;
  isCostPriceIncludingTax: boolean | null;
  isDefaultForPurchase: boolean | null;
  isDefaultForSale: boolean | null;
  isSalePriceIncludingTax: boolean | null;
  note: string | null;
  productId?: Product;
  quantity: Decimal | null;
  salePrice: Decimal | null;
  tenantId?: Tenant | null;
  unitId?: Unit | null;
  updatedAt: Date;
};
