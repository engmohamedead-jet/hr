import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductBarcodeListRelationFilter } from "../productBarcode/ProductBarcodeListRelationFilter";

export type BarcodeTypeWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  productBarcodes?: ProductBarcodeListRelationFilter;
};
