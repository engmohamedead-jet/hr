import { SaleQuotation as TSaleQuotation } from "../api/saleQuotation/SaleQuotation";

export const SALEQUOTATION_TITLE_FIELD = "internalMemo";

export const SaleQuotationTitle = (record: TSaleQuotation): string => {
  return record.internalMemo?.toString() || String(record.id);
};
