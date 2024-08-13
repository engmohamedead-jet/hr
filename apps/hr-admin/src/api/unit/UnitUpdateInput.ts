import { CompoundUnitWhereUniqueInput } from "../compoundUnit/CompoundUnitWhereUniqueInput";
import { CompoundUnitUpdateManyWithoutUnitsInput } from "./CompoundUnitUpdateManyWithoutUnitsInput";
import { ProductUpdateManyWithoutUnitsInput } from "./ProductUpdateManyWithoutUnitsInput";

export type UnitUpdateInput = {
  code?: string;
  compareUnit?: CompoundUnitWhereUniqueInput | null;
  compoundUnits?: CompoundUnitUpdateManyWithoutUnitsInput;
  description?: string | null;
  isCompound?: boolean | null;
  isDefault?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  products?: ProductUpdateManyWithoutUnitsInput;
};
