import { ProductUpdateManyWithoutProductTypesInput } from "./ProductUpdateManyWithoutProductTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductTypeUpdateInput = {
  code?: string | null;
  isActive?: boolean;
  isComponent?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  products?: ProductUpdateManyWithoutProductTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
