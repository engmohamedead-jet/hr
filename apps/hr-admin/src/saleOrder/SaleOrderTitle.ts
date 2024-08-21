import { SaleOrder as TSaleOrder } from "../api/saleOrder/SaleOrder";

export const SALEORDER_TITLE_FIELD = "billingAddress";

export const SaleOrderTitle = (record: TSaleOrder): string => {
  return record.billingAddress?.toString() || String(record.id);
};
