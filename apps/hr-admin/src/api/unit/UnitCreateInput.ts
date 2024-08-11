import { CompoundUnitWhereUniqueInput } from "../compoundUnit/CompoundUnitWhereUniqueInput";
import { CompoundUnitCreateNestedManyWithoutUnitsInput } from "./CompoundUnitCreateNestedManyWithoutUnitsInput";

export type UnitCreateInput = {
  code: string;
  compareUnit?: CompoundUnitWhereUniqueInput | null;
  compoundUnits?: CompoundUnitCreateNestedManyWithoutUnitsInput;
  description?: string | null;
  isCompound?: boolean | null;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
};
