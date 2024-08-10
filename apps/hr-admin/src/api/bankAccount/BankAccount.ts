import { BankBranch } from "../bankBranch/BankBranch";
import { Bank } from "../bank/Bank";

export type BankAccount = {
  accountNumber: string;
  bankBranchId?: BankBranch | null;
  bankId?: Bank;
  code: string;
  createdAt: Date;
  description: string | null;
  epan: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
