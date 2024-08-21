import { ProductBarcode as TProductBarcode } from "../api/productBarcode/ProductBarcode";

export const PRODUCTBARCODE_TITLE_FIELD = "barcode";

export const ProductBarcodeTitle = (record: TProductBarcode): string => {
  return record.barcode?.toString() || String(record.id);
};
