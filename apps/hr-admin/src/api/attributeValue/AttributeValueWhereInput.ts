import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductVariantListRelationFilter } from "../productVariant/ProductVariantListRelationFilter";

export type AttributeValueWhereInput = {
  attributeId?: AttributeWhereUniqueInput;
  id?: StringFilter;
  note?: StringNullableFilter;
  productVariants?: ProductVariantListRelationFilter;
  value?: StringFilter;
};
