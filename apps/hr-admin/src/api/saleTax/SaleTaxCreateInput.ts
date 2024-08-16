import { ProductGroupCreateNestedManyWithoutSaleTaxesInput } from "./ProductGroupCreateNestedManyWithoutSaleTaxesInput";
import { ProductCreateNestedManyWithoutSaleTaxesInput } from "./ProductCreateNestedManyWithoutSaleTaxesInput";

export type SaleTaxCreateInput = {
  code?: string | null;
  description?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  productGroups?: ProductGroupCreateNestedManyWithoutSaleTaxesInput;
  products?: ProductCreateNestedManyWithoutSaleTaxesInput;
};
