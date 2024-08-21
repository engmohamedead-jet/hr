import { ProductBarcodeCreateNestedManyWithoutBarcodeTypesInput } from "./ProductBarcodeCreateNestedManyWithoutBarcodeTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type BarcodeTypeCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  productBarcodes?: ProductBarcodeCreateNestedManyWithoutBarcodeTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
