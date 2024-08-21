import { AccountTransaction as TAccountTransaction } from "../api/accountTransaction/AccountTransaction";

export const ACCOUNTTRANSACTION_TITLE_FIELD = "name";

export const AccountTransactionTitle = (
  record: TAccountTransaction
): string => {
  return record.name?.toString() || String(record.id);
};
