import { BillOfMaterialDetailCreateNestedManyWithoutUnitsInput } from "./BillOfMaterialDetailCreateNestedManyWithoutUnitsInput";
import { BillOfMaterialCreateNestedManyWithoutUnitsInput } from "./BillOfMaterialCreateNestedManyWithoutUnitsInput";
import { ProductionOrderCreateNestedManyWithoutUnitsInput } from "./ProductionOrderCreateNestedManyWithoutUnitsInput";
import { ProductCreateNestedManyWithoutUnitsInput } from "./ProductCreateNestedManyWithoutUnitsInput";

export type UnitCreateInput = {
  billOfMaterialDetails?: BillOfMaterialDetailCreateNestedManyWithoutUnitsInput;
  billOfMaterials?: BillOfMaterialCreateNestedManyWithoutUnitsInput;
  code?: string | null;
  description?: string | null;
  isCompound?: boolean | null;
  isDefault?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  productionOrders?: ProductionOrderCreateNestedManyWithoutUnitsInput;
  products?: ProductCreateNestedManyWithoutUnitsInput;
};
