import { BarcodeTypeWhereUniqueInput } from "../barcodeType/BarcodeTypeWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantWhereUniqueInput } from "../productVariant/ProductVariantWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductBarcodeUpdateInput = {
  barcode?: string;
  barcodeTypeId?: BarcodeTypeWhereUniqueInput | null;
  isActive?: boolean | null;
  note?: string | null;
  productId?: ProductWhereUniqueInput;
  productVariantId?: ProductVariantWhereUniqueInput | null;
  tenantId?: TenantWhereUniqueInput | null;
};
