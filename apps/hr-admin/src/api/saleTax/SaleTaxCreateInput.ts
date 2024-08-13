import { ProductGroupCreateNestedManyWithoutSaleTaxesInput } from "./ProductGroupCreateNestedManyWithoutSaleTaxesInput";
import { ProductCreateNestedManyWithoutSaleTaxesInput } from "./ProductCreateNestedManyWithoutSaleTaxesInput";
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
  products?: ProductCreateNestedManyWithoutSaleTaxesInput;
  rate?: Decimal | null;
  store?: StoreWhereUniqueInput | null;
};
