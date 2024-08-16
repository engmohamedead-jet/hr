import { AttributeWhereUniqueInput } from "../attribute/AttributeWhereUniqueInput";
import { ProductVariantUpdateManyWithoutAttributeValuesInput } from "./ProductVariantUpdateManyWithoutAttributeValuesInput";

export type AttributeValueUpdateInput = {
  attributeId?: AttributeWhereUniqueInput;
  note?: string | null;
  productVariants?: ProductVariantUpdateManyWithoutAttributeValuesInput;
  value?: string;
};
