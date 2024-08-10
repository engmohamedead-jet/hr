import { AccountCategoryWhereUniqueInput } from "../accountCategory/AccountCategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AccountTypeWhereUniqueInput } from "../accountType/AccountTypeWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type AccountWhereInput = {
  accountCategory?: AccountCategoryWhereUniqueInput;
  accountNumber?: StringNullableFilter;
  accountTypeId?: AccountTypeWhereUniqueInput;
  currencyId?: CurrencyWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isMasterAccount?: BooleanFilter;
  isUnderRevision?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  parentAccountId?: StringNullableFilter;
  referenceNumber?: StringNullableFilter;
};
