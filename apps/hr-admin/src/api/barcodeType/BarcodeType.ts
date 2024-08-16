import { ProductBarcode } from "../productBarcode/ProductBarcode";

export type BarcodeType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  name: string;
  normalizedName: string;
  note: string | null;
  productBarcodes?: Array<ProductBarcode>;
  updatedAt: Date;
};
