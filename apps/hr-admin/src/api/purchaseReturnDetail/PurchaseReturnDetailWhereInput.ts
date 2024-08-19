import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { PurchasePriceTypeWhereUniqueInput } from "../purchasePriceType/PurchasePriceTypeWhereUniqueInput";
import { PurchaseReturnWhereUniqueInput } from "../purchaseReturn/PurchaseReturnWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type PurchaseReturnDetailWhereInput = {
  barcode?: StringNullableFilter;
  discount?: DecimalNullableFilter;
  discountRate?: DecimalNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isError?: BooleanFilter;
  isReplicated?: BooleanFilter;
  note?: StringNullableFilter;
  price?: DecimalFilter;
  priceTotal?: DecimalNullableFilter;
  productId?: ProductWhereUniqueInput;
  productSerialNumber?: StringNullableFilter;
  productVariantId?: ProductVariantWhereUniqueInput;
  purchasePriceTypeId?: PurchasePriceTypeWhereUniqueInput;
  purchaseReturnId?: PurchaseReturnWhereUniqueInput;
  quantity?: DecimalFilter;
  sequence?: IntFilter;
  tenantId?: TenantWhereUniqueInput;
  unitId?: UnitWhereUniqueInput;
};
