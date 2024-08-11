import { Unit } from "../unit/Unit";
import { Decimal } from "decimal.js";

export type CompoundUnit = {
  baseUnitId?: Unit;
  compareUnitId?: Unit;
  createdAt: Date;
  id: string;
  notes: string | null;
  updatedAt: Date;
  value: Decimal;
};
