import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductDepartmentWhereUniqueInput } from "./ProductDepartmentWhereUniqueInput";
import { ProductDepartmentListRelationFilter } from "./ProductDepartmentListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductDepartmentWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isActive?: BooleanFilter;
  isDefault?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  parentProductDepartmentId?: ProductDepartmentWhereUniqueInput;
  productDepartments?: ProductDepartmentListRelationFilter;
  products?: ProductListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
};
