import { ProductGroupCreateNestedManyWithoutSaleTaxesInput } from "./ProductGroupCreateNestedManyWithoutSaleTaxesInput";
import { ProductCreateNestedManyWithoutSaleTaxesInput } from "./ProductCreateNestedManyWithoutSaleTaxesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SaleTaxCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  productGroups?: ProductGroupCreateNestedManyWithoutSaleTaxesInput;
  products?: ProductCreateNestedManyWithoutSaleTaxesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
