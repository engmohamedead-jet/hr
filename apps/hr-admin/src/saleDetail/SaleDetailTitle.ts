import { SaleDetail as TSaleDetail } from "../api/saleDetail/SaleDetail";

export const SALEDETAIL_TITLE_FIELD = "barcode";

export const SaleDetailTitle = (record: TSaleDetail): string => {
  return record.barcode?.toString() || String(record.id);
};
