import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductVariantListRelationFilter } from "../productVariant/ProductVariantListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type AttributeValueWhereInput = {
  attributeId?: AttributeWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanFilter;
  note?: StringNullableFilter;
  productVariants?: ProductVariantListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
  value?: StringFilter;
};
