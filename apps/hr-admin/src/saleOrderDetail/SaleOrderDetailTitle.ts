import { SaleOrderDetail as TSaleOrderDetail } from "../api/saleOrderDetail/SaleOrderDetail";

export const SALEORDERDETAIL_TITLE_FIELD = "barcode";

export const SaleOrderDetailTitle = (record: TSaleOrderDetail): string => {
  return record.barcode?.toString() || String(record.id);
};
