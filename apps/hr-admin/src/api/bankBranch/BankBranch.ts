import { BankAccount } from "../bankAccount/BankAccount";
import { Bank } from "../bank/Bank";

export type BankBranch = {
  address: string | null;
  bankAccounts?: Array<BankAccount>;
  bankId?: Bank | null;
  code: string;
  contactPhoneNumber: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
