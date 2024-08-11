import { Debit as TDebit } from "../api/debit/Debit";

export const DEBIT_TITLE_FIELD = "contractNumber";

export const DebitTitle = (record: TDebit): string => {
  return record.contractNumber?.toString() || String(record.id);
};
