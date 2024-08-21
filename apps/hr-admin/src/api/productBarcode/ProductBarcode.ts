import { BarcodeType } from "../barcodeType/BarcodeType";
import { Product } from "../product/Product";
import { ProductVariant } from "../productVariant/ProductVariant";
import { Tenant } from "../tenant/Tenant";

export type ProductBarcode = {
  barcode: string;
  barcodeTypeId?: BarcodeType | null;
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  note: string | null;
  productId?: Product;
  productVariantId?: ProductVariant | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
