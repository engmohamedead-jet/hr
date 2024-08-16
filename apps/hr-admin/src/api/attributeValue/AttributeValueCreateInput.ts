import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";
import { ProductVariantCreateNestedManyWithoutAttributeValuesInput } from "./ProductVariantCreateNestedManyWithoutAttributeValuesInput";

export type AttributeValueCreateInput = {
  attributeId: AttributeWhereUniqueInput;
  note?: string | null;
  productVariants?: ProductVariantCreateNestedManyWithoutAttributeValuesInput;
  value: string;
};
