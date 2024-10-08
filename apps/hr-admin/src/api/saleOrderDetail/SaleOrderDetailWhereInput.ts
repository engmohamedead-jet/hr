import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { SaleOrderWhereUniqueInput } from "../saleOrder/SaleOrderWhereUniqueInput";
import { SalePriceTypeWhereUniqueInput } from "../salePriceType/SalePriceTypeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type SaleOrderDetailWhereInput = {
  barcode?: StringNullableFilter;
  discount?: DecimalNullableFilter;
  discountRate?: DecimalFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isError?: BooleanFilter;
  isTaxed?: BooleanFilter;
  price?: DecimalFilter;
  priceTotal?: DecimalFilter;
  productId?: ProductWhereUniqueInput;
  productSerialNumber?: StringNullableFilter;
  productVariantId?: ProductVariantWhereUniqueInput;
  quantity?: DecimalFilter;
  saleOrder?: SaleOrderWhereUniqueInput;
  salePriceTypeId?: SalePriceTypeWhereUniqueInput;
  sequence?: StringFilter;
  tenant?: TenantWhereUniqueInput;
  unitId?: UnitWhereUniqueInput;
};
