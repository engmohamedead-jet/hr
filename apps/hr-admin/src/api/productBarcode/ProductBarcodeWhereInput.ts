import { StringFilter } from "../../util/StringFilter";
import { BarcodeTypeWhereUniqueInput } from "../barcodeType/BarcodeTypeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";

export type ProductBarcodeWhereInput = {
  barcode?: StringFilter;
  barcodeTypeId?: BarcodeTypeWhereUniqueInput;
  id?: StringFilter;
  note?: StringNullableFilter;
  productId?: ProductWhereUniqueInput;
  productVariantId?: ProductVariantWhereUniqueInput;
};
