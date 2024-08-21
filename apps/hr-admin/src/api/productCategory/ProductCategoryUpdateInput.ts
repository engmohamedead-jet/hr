import { ProductUpdateManyWithoutProductCategoriesInput } from "./ProductUpdateManyWithoutProductCategoriesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductCategoryUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  isDefault?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  products?: ProductUpdateManyWithoutProductCategoriesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
