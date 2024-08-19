import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";
import { ProductVariantUpdateManyWithoutAttributeValuesInput } from "./ProductVariantUpdateManyWithoutAttributeValuesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type AttributeValueUpdateInput = {
  attributeId?: AttributeWhereUniqueInput;
  isActive?: boolean;
  note?: string | null;
  productVariants?: ProductVariantUpdateManyWithoutAttributeValuesInput;
  tenantId?: TenantWhereUniqueInput | null;
  value?: string;
};
