import { BarcodeTypeWhereUniqueInput } from "../barcodeType/BarcodeTypeWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";

export type ProductBarcodeCreateInput = {
  barcode: string;
  barcodeTypeId?: BarcodeTypeWhereUniqueInput | null;
  note?: string | null;
  productId: ProductWhereUniqueInput;
  productVariantId?: ProductVariantWhereUniqueInput | null;
};
