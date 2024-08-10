import { BankAccountCreateNestedManyWithoutBankBranchesInput } from "./BankAccountCreateNestedManyWithoutBankBranchesInput";
import { BankWhereUniqueInput } from "../bank/BankWhereUniqueInput";

export type BankBranchCreateInput = {
  address?: string | null;
  bankAccounts?: BankAccountCreateNestedManyWithoutBankBranchesInput;
  bankId?: BankWhereUniqueInput | null;
  code: string;
  contactPhoneNumber?: string | null;
  description?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
};
