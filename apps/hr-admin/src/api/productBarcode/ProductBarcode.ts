import { BarcodeType } from "../barcodeType/BarcodeType";
import { Product } from "../product/Product";
import { ProductVariant } from "../productVariant/ProductVariant";

export type ProductBarcode = {
  barcode: string;
  barcodeTypeId?: BarcodeType | null;
  createdAt: Date;
  id: string;
  note: string | null;
  productId?: Product;
  productVariantId?: ProductVariant | null;
  updatedAt: Date;
};
