import { BankAccount as TBankAccount } from "../api/bankAccount/BankAccount";

export const BANKACCOUNT_TITLE_FIELD = "name";

export const BankAccountTitle = (record: TBankAccount): string => {
  return record.name?.toString() || String(record.id);
};
