import { Sale as TSale } from "../api/sale/Sale";

export const SALE_TITLE_FIELD = "referenceNumber";

export const SaleTitle = (record: TSale): string => {
  return record.referenceNumber?.toString() || String(record.id);
};
