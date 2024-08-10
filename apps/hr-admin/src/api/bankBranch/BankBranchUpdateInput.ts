import { BankAccountUpdateManyWithoutBankBranchesInput } from "./BankAccountUpdateManyWithoutBankBranchesInput";
import { BankWhereUniqueInput } from "../bank/BankWhereUniqueInput";

export type BankBranchUpdateInput = {
  address?: string | null;
  bankAccounts?: BankAccountUpdateManyWithoutBankBranchesInput;
  bankId?: BankWhereUniqueInput | null;
  code?: string;
  contactPhoneNumber?: string | null;
  description?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
};
