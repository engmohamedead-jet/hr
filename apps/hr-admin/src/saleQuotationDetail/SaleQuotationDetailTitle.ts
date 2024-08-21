import { SaleQuotationDetail as TSaleQuotationDetail } from "../api/saleQuotationDetail/SaleQuotationDetail";

export const SALEQUOTATIONDETAIL_TITLE_FIELD = "sequence";

export const SaleQuotationDetailTitle = (
  record: TSaleQuotationDetail
): string => {
  return record.sequence?.toString() || String(record.id);
};
