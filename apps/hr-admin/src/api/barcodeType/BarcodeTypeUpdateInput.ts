import { ProductBarcodeUpdateManyWithoutBarcodeTypesInput } from "./ProductBarcodeUpdateManyWithoutBarcodeTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type BarcodeTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  productBarcodes?: ProductBarcodeUpdateManyWithoutBarcodeTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
