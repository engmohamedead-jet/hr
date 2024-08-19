import { Decimal } from "decimal.js";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { SaleWhereUniqueInput } from "../sale/SaleWhereUniqueInput";
import { SalePriceTypeWhereUniqueInput } from "../salePriceType/SalePriceTypeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type SaleDetailUpdateInput = {
  barcode?: string | null;
  discount?: Decimal | null;
  discountRate?: Decimal | null;
  isActive?: boolean;
  isError?: boolean;
  isReplicated?: boolean;
  note?: string | null;
  price?: Decimal;
  priceTotal?: Decimal;
  productId?: ProductWhereUniqueInput;
  productSerialNumber?: string | null;
  productVariantId?: ProductVariantWhereUniqueInput | null;
  quantity?: Decimal;
  saleId?: SaleWhereUniqueInput;
  salePriceTypeId?: SalePriceTypeWhereUniqueInput;
  sequence?: number;
  tenantId?: TenantWhereUniqueInput | null;
  unitId?: UnitWhereUniqueInput;
};
