import { ProductGroupUpdateManyWithoutSaleTaxesInput } from "./ProductGroupUpdateManyWithoutSaleTaxesInput";
import { ProductUpdateManyWithoutSaleTaxesInput } from "./ProductUpdateManyWithoutSaleTaxesInput";

export type SaleTaxUpdateInput = {
  code?: string | null;
  description?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  productGroups?: ProductGroupUpdateManyWithoutSaleTaxesInput;
  products?: ProductUpdateManyWithoutSaleTaxesInput;
};
