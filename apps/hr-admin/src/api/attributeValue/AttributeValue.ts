import { Attribute } from "../attribute/Attribute";
import { ProductVariant } from "../productVariant/ProductVariant";

export type AttributeValue = {
  attributeId?: Attribute;
  createdAt: Date;
  id: string;
  note: string | null;
  productVariants?: Array<ProductVariant>;
  updatedAt: Date;
  value: string;
};
