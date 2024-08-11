import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { Decimal } from "decimal.js";

export type CompoundUnitCreateInput = {
  baseUnitId: UnitWhereUniqueInput;
  compareUnitId: UnitWhereUniqueInput;
  notes?: string | null;
  value: Decimal;
};
