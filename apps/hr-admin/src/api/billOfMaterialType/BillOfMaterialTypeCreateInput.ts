import { BillOfMaterialCreateNestedManyWithoutBillOfMaterialTypesInput } from "./BillOfMaterialCreateNestedManyWithoutBillOfMaterialTypesInput";

export type BillOfMaterialTypeCreateInput = {
  billOfMaterials?: BillOfMaterialCreateNestedManyWithoutBillOfMaterialTypesInput;
  code?: string | null;
  description?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
};
