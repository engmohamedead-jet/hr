import { Decimal } from "decimal.js";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { SaleOrderWhereUniqueInput } from "../saleOrder/SaleOrderWhereUniqueInput";
import { SalePriceTypeWhereUniqueInput } from "../salePriceType/SalePriceTypeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type SaleOrderDetailUpdateInput = {
  barcode?: string | null;
  discount?: Decimal | null;
  discountRate?: Decimal;
  isActive?: boolean;
  isError?: boolean;
  isTaxed?: boolean;
  price?: Decimal;
  priceTotal?: Decimal;
  productId?: ProductWhereUniqueInput;
  productSerialNumber?: string | null;
  productVariantId?: ProductVariantWhereUniqueInput | null;
  quantity?: Decimal;
  saleOrder?: SaleOrderWhereUniqueInput;
  salePriceTypeId?: SalePriceTypeWhereUniqueInput;
  sequence?: string;
  tenant?: TenantWhereUniqueInput | null;
  unitId?: UnitWhereUniqueInput;
};
