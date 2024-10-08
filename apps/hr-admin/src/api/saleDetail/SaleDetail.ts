import { Decimal } from "decimal.js";
import { Product } from "../product/Product";
import { ProductVariant } from "../productVariant/ProductVariant";
import { Sale } from "../sale/Sale";
import { SalePriceType } from "../salePriceType/SalePriceType";
import { Tenant } from "../tenant/Tenant";
import { Unit } from "../unit/Unit";

export type SaleDetail = {
  barcode: string | null;
  createdAt: Date;
  discount: Decimal | null;
  discountRate: Decimal | null;
  id: string;
  isActive: boolean;
  isError: boolean;
  isReplicated: boolean;
  isTaxed: boolean;
  note: string | null;
  price: Decimal;
  priceTotal: Decimal;
  productId?: Product;
  productSerialNumber: string | null;
  productVariantId?: ProductVariant | null;
  quantity: Decimal;
  saleId?: Sale;
  salePriceTypeId?: SalePriceType;
  sequence: number;
  tenantId?: Tenant | null;
  unitId?: Unit;
  updatedAt: Date;
};
