import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupplierWhereInput = {
  address?: StringNullableFilter;
  code?: StringNullableFilter;
  credit?: StringNullableFilter;
  currencyId?: CurrencyWhereUniqueInput;
  customers?: CustomerListRelationFilter;
  debit?: StringNullableFilter;
  description?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  normalizedName?: StringNullableFilter;
  note?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  website?: StringNullableFilter;
};
