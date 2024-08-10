import { StringFilter } from "../../util/StringFilter";
import { BankBranchWhereUniqueInput } from "../bankBranch/BankBranchWhereUniqueInput";
import { BankWhereUniqueInput } from "../bank/BankWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BankAccountWhereInput = {
  accountNumber?: StringFilter;
  bankBranchId?: BankBranchWhereUniqueInput;
  bankId?: BankWhereUniqueInput;
  code?: StringFilter;
  description?: StringNullableFilter;
  epan?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
