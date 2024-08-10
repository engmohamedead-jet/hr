import { Currency as TCurrency } from "../api/currency/Currency";

export const CURRENCY_TITLE_FIELD = "foreignCurrencyName";

export const CurrencyTitle = (record: TCurrency): string => {
  return record.foreignCurrencyName?.toString() || String(record.id);
};
