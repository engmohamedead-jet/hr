import { ProductBarcodeUpdateManyWithoutBarcodeTypesInput } from "./ProductBarcodeUpdateManyWithoutBarcodeTypesInput";

export type BarcodeTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  productBarcodes?: ProductBarcodeUpdateManyWithoutBarcodeTypesInput;
};
