import { ProductCreateNestedManyWithoutProductCategoriesInput } from "./ProductCreateNestedManyWithoutProductCategoriesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductCategoryCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  products?: ProductCreateNestedManyWithoutProductCategoriesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
