import { SaleReturn as TSaleReturn } from "../api/saleReturn/SaleReturn";

export const SALERETURN_TITLE_FIELD = "referenceNumber";

export const SaleReturnTitle = (record: TSaleReturn): string => {
  return record.referenceNumber?.toString() || String(record.id);
};
