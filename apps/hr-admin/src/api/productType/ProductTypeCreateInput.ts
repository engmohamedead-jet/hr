import { ProductCreateNestedManyWithoutProductTypesInput } from "./ProductCreateNestedManyWithoutProductTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductTypeCreateInput = {
  code?: string | null;
  isActive: boolean;
  isComponent?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  products?: ProductCreateNestedManyWithoutProductTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
