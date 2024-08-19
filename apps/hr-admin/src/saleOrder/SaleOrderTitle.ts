import { SaleOrder as TSaleOrder } from "../api/saleOrder/SaleOrder";

export const SALEORDER_TITLE_FIELD = "id";

export const SaleOrderTitle = (record: TSaleOrder): string => {
  return record.id?.toString() || String(record.id);
};
