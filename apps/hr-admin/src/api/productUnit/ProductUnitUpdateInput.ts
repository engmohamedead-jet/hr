import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { Decimal } from "decimal.js";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductUnitUpdateInput = {
  barcode?: string | null;
  compareUnitId?: UnitWhereUniqueInput | null;
  compareUnitQuantity?: Decimal | null;
  costPrice?: number | null;
  isActive?: boolean;
  isCostPriceIncludingTax?: boolean | null;
  isDefaultForPurchase?: boolean | null;
  isDefaultForSale?: boolean | null;
  isSalePriceIncludingTax?: boolean | null;
  note?: string | null;
  productId?: ProductWhereUniqueInput;
  quantity?: Decimal | null;
  salePrice?: Decimal | null;
  tenantId?: TenantWhereUniqueInput | null;
  unitId?: UnitWhereUniqueInput | null;
};
