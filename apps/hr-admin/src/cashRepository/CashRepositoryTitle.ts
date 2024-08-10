import { CashRepository as TCashRepository } from "../api/cashRepository/CashRepository";

export const CASHREPOSITORY_TITLE_FIELD = "name";

export const CashRepositoryTitle = (record: TCashRepository): string => {
  return record.name?.toString() || String(record.id);
};
