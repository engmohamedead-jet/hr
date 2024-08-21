import { ProductUnit as TProductUnit } from "../api/productUnit/ProductUnit";

export const PRODUCTUNIT_TITLE_FIELD = "barcode";

export const ProductUnitTitle = (record: TProductUnit): string => {
  return record.barcode?.toString() || String(record.id);
};
