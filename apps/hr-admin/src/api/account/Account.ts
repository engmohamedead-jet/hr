import { AccountCategory } from "../accountCategory/AccountCategory";
import { AccountType } from "../accountType/AccountType";
import { Currency } from "../currency/Currency";

export type Account = {
  accountCategory?: AccountCategory | null;
  accountNumber: string | null;
  accountTypeId?: AccountType;
  createdAt: Date;
  currencyId?: Currency;
  description: string | null;
  id: string;
  isActive: boolean | null;
  isMasterAccount: boolean;
  isUnderRevision: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  parentAccountId: string | null;
  referenceNumber: string | null;
  updatedAt: Date;
};
