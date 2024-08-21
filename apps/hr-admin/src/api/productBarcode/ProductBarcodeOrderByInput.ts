import { SortOrder } from "../../util/SortOrder";

export type ProductBarcodeOrderByInput = {
  barcode?: SortOrder;
  barcodeTypeIdId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  note?: SortOrder;
  productIdId?: SortOrder;
  productVariantIdId?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
