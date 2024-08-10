import { Bank as TBank } from "../api/bank/Bank";

export const BANK_TITLE_FIELD = "name";

export const BankTitle = (record: TBank): string => {
  return record.name?.toString() || String(record.id);
};
