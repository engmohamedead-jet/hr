import { AccountTransactionDetail as TAccountTransactionDetail } from "../api/accountTransactionDetail/AccountTransactionDetail";

export const ACCOUNTTRANSACTIONDETAIL_TITLE_FIELD = "note";

export const AccountTransactionDetailTitle = (
  record: TAccountTransactionDetail
): string => {
  return record.note?.toString() || String(record.id);
};
