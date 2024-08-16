import { SortOrder } from "../../util/SortOrder";

export type ProductBarcodeOrderByInput = {
  barcode?: SortOrder;
  barcodeTypeIdId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  productIdId?: SortOrder;
  productVariantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
