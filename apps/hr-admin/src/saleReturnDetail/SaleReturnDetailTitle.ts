import { SaleReturnDetail as TSaleReturnDetail } from "../api/saleReturnDetail/SaleReturnDetail";

export const SALERETURNDETAIL_TITLE_FIELD = "barcode";

export const SaleReturnDetailTitle = (record: TSaleReturnDetail): string => {
  return record.barcode?.toString() || String(record.id);
};
