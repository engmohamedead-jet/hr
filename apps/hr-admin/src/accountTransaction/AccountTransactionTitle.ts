import { AccountTransaction as TAccountTransaction } from "../api/accountTransaction/AccountTransaction";

export const ACCOUNTTRANSACTION_TITLE_FIELD = "note";

export const AccountTransactionTitle = (
  record: TAccountTransaction
): string => {
  return record.note?.toString() || String(record.id);
};
