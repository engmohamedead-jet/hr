import { BillOfMaterialDetailUpdateManyWithoutUnitsInput } from "./BillOfMaterialDetailUpdateManyWithoutUnitsInput";
import { BillOfMaterialUpdateManyWithoutUnitsInput } from "./BillOfMaterialUpdateManyWithoutUnitsInput";
import { ProductionOrderUpdateManyWithoutUnitsInput } from "./ProductionOrderUpdateManyWithoutUnitsInput";
import { ProductUpdateManyWithoutUnitsInput } from "./ProductUpdateManyWithoutUnitsInput";

export type UnitUpdateInput = {
  billOfMaterialDetails?: BillOfMaterialDetailUpdateManyWithoutUnitsInput;
  billOfMaterials?: BillOfMaterialUpdateManyWithoutUnitsInput;
  code?: string | null;
  description?: string | null;
  isCompound?: boolean | null;
  isDefault?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  productionOrders?: ProductionOrderUpdateManyWithoutUnitsInput;
  products?: ProductUpdateManyWithoutUnitsInput;
};
