import { ProductGroupUpdateManyWithoutSaleTaxesInput } from "./ProductGroupUpdateManyWithoutSaleTaxesInput";
import { ProductUpdateManyWithoutSaleTaxesInput } from "./ProductUpdateManyWithoutSaleTaxesInput";
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
  products?: ProductUpdateManyWithoutSaleTaxesInput;
  rate?: Decimal | null;
  store?: StoreWhereUniqueInput | null;
};
