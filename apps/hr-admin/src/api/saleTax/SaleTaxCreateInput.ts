import { ProductGroupCreateNestedManyWithoutSaleTaxesInput } from "./ProductGroupCreateNestedManyWithoutSaleTaxesInput";
import { Decimal } from "decimal.js";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type SaleTaxCreateInput = {
  code?: string | null;
  description?: string | null;
  isExemption?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  productGroups?: ProductGroupCreateNestedManyWithoutSaleTaxesInput;
  rate?: Decimal | null;
  store?: StoreWhereUniqueInput | null;
};
