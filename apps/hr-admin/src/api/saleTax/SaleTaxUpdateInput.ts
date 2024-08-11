import { ProductGroupUpdateManyWithoutSaleTaxesInput } from "./ProductGroupUpdateManyWithoutSaleTaxesInput";
import { Decimal } from "decimal.js";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type SaleTaxUpdateInput = {
  code?: string | null;
  description?: string | null;
  isExemption?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  productGroups?: ProductGroupUpdateManyWithoutSaleTaxesInput;
  rate?: Decimal | null;
  store?: StoreWhereUniqueInput | null;
};
