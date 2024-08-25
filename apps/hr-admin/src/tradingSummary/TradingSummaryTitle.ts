import { TradingSummary as TTradingSummary } from "../api/tradingSummary/TradingSummary";

export const TRADINGSUMMARY_TITLE_FIELD = "fiscalWeekId";

export const TradingSummaryTitle = (record: TTradingSummary): string => {
  return record.fiscalWeekId?.toString() || String(record.id);
};
