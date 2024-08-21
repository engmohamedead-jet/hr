import { BillOfMaterialUpdateManyWithoutBillOfMaterialTypesInput } from "./BillOfMaterialUpdateManyWithoutBillOfMaterialTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type BillOfMaterialTypeUpdateInput = {
  billOfMaterials?: BillOfMaterialUpdateManyWithoutBillOfMaterialTypesInput;
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
