import { AttributeValueUpdateManyWithoutAttributesInput } from "./AttributeValueUpdateManyWithoutAttributesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type AttributeUpdateInput = {
  attributeValues?: AttributeValueUpdateManyWithoutAttributesInput;
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
