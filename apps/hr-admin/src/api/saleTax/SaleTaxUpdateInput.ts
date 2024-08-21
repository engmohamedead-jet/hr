import { ProductGroupUpdateManyWithoutSaleTaxesInput } from "./ProductGroupUpdateManyWithoutSaleTaxesInput";
import { ProductUpdateManyWithoutSaleTaxesInput } from "./ProductUpdateManyWithoutSaleTaxesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SaleTaxUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  productGroups?: ProductGroupUpdateManyWithoutSaleTaxesInput;
  products?: ProductUpdateManyWithoutSaleTaxesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
