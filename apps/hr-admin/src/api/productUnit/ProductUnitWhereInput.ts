import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductUnitWhereInput = {
  barcode?: StringNullableFilter;
  compareUnitId?: UnitWhereUniqueInput;
  compareUnitQuantity?: DecimalNullableFilter;
  costPrice?: FloatNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isCostPriceIncludingTax?: BooleanNullableFilter;
  isDefaultForPurchase?: BooleanNullableFilter;
  isDefaultForSale?: BooleanNullableFilter;
  isSalePriceIncludingTax?: BooleanNullableFilter;
  note?: StringNullableFilter;
  productId?: ProductWhereUniqueInput;
  quantity?: DecimalNullableFilter;
  salePrice?: DecimalNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  unitId?: UnitWhereUniqueInput;
};
