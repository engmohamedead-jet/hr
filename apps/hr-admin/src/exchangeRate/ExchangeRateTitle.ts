import { ExchangeRate as TExchangeRate } from "../api/exchangeRate/ExchangeRate";

export const EXCHANGERATE_TITLE_FIELD = "name";

export const ExchangeRateTitle = (record: TExchangeRate): string => {
  return record.name?.toString() || String(record.id);
};
