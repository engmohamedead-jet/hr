import { ProductBarcode } from "../productBarcode/ProductBarcode";
import { Tenant } from "../tenant/Tenant";

export type BarcodeType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  productBarcodes?: Array<ProductBarcode>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
