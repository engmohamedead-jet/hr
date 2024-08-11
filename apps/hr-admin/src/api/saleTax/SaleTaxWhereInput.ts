import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductGroupListRelationFilter } from "../productGroup/ProductGroupListRelationFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type SaleTaxWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isExemption?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  productGroups?: ProductGroupListRelationFilter;
  rate?: DecimalNullableFilter;
  store?: StoreWhereUniqueInput;
};
