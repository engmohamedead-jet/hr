import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { Decimal } from "decimal.js";

export type CompoundUnitUpdateInput = {
  baseUnitId?: UnitWhereUniqueInput;
  compareUnitId?: UnitWhereUniqueInput;
  notes?: string | null;
  value?: Decimal;
};
