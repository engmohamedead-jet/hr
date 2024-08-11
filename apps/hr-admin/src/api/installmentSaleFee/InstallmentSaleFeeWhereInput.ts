import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PaymentTermListRelationFilter } from "../paymentTerm/PaymentTermListRelationFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type InstallmentSaleFeeWhereInput = {
  account?: AccountWhereUniqueInput;
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isFlatAmount?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  paymentTerms?: PaymentTermListRelationFilter;
  rate?: DecimalNullableFilter;
};
