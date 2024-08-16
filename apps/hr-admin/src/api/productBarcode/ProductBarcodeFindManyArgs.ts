import { ProductBarcodeWhereInput } from "./ProductBarcodeWhereInput";
import { ProductBarcodeOrderByInput } from "./ProductBarcodeOrderByInput";

export type ProductBarcodeFindManyArgs = {
  where?: ProductBarcodeWhereInput;
  orderBy?: Array<ProductBarcodeOrderByInput>;
  skip?: number;
  take?: number;
};
