import { CurrencySetting as TCurrencySetting } from "../api/currencySetting/CurrencySetting";

export const CURRENCYSETTING_TITLE_FIELD = "key";

export const CurrencySettingTitle = (record: TCurrencySetting): string => {
  return record.key?.toString() || String(record.id);
};
