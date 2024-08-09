import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmployeeWhereInput = {
  balance?: DecimalNullableFilter;
  departmentId?: DepartmentWhereUniqueInput;
  id?: StringFilter;
  lastYearBalance?: DecimalNullableFilter;
  name?: StringNullableFilter;
  normalizedName?: StringNullableFilter;
  note?: StringNullableFilter;
  remainingBalance?: DecimalNullableFilter;
  usedBalance?: DecimalNullableFilter;
};
