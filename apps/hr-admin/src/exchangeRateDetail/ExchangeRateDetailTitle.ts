import { ExchangeRateDetail as TExchangeRateDetail } from "../api/exchangeRateDetail/ExchangeRateDetail";

export const EXCHANGERATEDETAIL_TITLE_FIELD = "id";

export const ExchangeRateDetailTitle = (
  record: TExchangeRateDetail
): string => {
  return record.id?.toString() || String(record.id);
};
