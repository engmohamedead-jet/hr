import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalFilter } from "../../util/DecimalFilter";

export type CompoundUnitWhereInput = {
  baseUnitId?: UnitWhereUniqueInput;
  compareUnitId?: UnitWhereUniqueInput;
  id?: StringFilter;
  notes?: StringNullableFilter;
  value?: DecimalFilter;
};
