import { BankBranchWhereUniqueInput } from "../bankBranch/BankBranchWhereUniqueInput";
import { BankWhereUniqueInput } from "../bank/BankWhereUniqueInput";

export type BankAccountCreateInput = {
  accountNumber: string;
  bankBranchId?: BankBranchWhereUniqueInput | null;
  bankId: BankWhereUniqueInput;
  code: string;
  description?: string | null;
  epan?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
};
