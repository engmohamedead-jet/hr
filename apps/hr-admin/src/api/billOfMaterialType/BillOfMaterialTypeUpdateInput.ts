import { BillOfMaterialUpdateManyWithoutBillOfMaterialTypesInput } from "./BillOfMaterialUpdateManyWithoutBillOfMaterialTypesInput";

export type BillOfMaterialTypeUpdateInput = {
  billOfMaterials?: BillOfMaterialUpdateManyWithoutBillOfMaterialTypesInput;
  code?: string | null;
  description?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
};
