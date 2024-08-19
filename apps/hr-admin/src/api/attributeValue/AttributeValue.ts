import { Attribute } from "../attribute/Attribute";
import { ProductVariant } from "../productVariant/ProductVariant";
import { Tenant } from "../tenant/Tenant";

export type AttributeValue = {
  attributeId?: Attribute;
  createdAt: Date;
  id: string;
  isActive: boolean;
  note: string | null;
  productVariants?: Array<ProductVariant>;
  tenantId?: Tenant | null;
  updatedAt: Date;
  value: string;
};
