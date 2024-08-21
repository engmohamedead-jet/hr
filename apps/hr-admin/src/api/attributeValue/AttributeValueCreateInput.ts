import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";
import { ProductVariantCreateNestedManyWithoutAttributeValuesInput } from "./ProductVariantCreateNestedManyWithoutAttributeValuesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type AttributeValueCreateInput = {
  attributeId: AttributeWhereUniqueInput;
  isActive: boolean;
  note?: string | null;
  productVariants?: ProductVariantCreateNestedManyWithoutAttributeValuesInput;
  tenantId?: TenantWhereUniqueInput | null;
  value: string;
};
