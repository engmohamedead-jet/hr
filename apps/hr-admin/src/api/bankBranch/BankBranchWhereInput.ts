import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BankAccountListRelationFilter } from "../bankAccount/BankAccountListRelationFilter";
import { BankWhereUniqueInput } from "../bank/BankWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BankBranchWhereInput = {
  address?: StringNullableFilter;
  bankAccounts?: BankAccountListRelationFilter;
  bankId?: BankWhereUniqueInput;
  code?: StringFilter;
  contactPhoneNumber?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
