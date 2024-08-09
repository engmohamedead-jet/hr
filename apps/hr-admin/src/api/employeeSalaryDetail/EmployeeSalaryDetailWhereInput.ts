import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SalaryItemWhereUniqueInput } from "../salaryItem/SalaryItemWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";
import { IntFilter } from "../../util/IntFilter";

export type EmployeeSalaryDetailWhereInput = {
  id?: StringFilter;
  notes?: StringNullableFilter;
  salaryItemId?: SalaryItemWhereUniqueInput;
  salaryItemValue?: DecimalFilter;
  serial?: IntFilter;
};
