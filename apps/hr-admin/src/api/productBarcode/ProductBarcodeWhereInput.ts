import { StringFilter } from "../../util/StringFilter";
import { BarcodeTypeWhereUniqueInput } from "../barcodeType/BarcodeTypeWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductBarcodeWhereInput = {
  barcode?: StringFilter;
  barcodeTypeId?: BarcodeTypeWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  note?: StringNullableFilter;
  productId?: ProductWhereUniqueInput;
  productVariantId?: ProductVariantWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput;
};
