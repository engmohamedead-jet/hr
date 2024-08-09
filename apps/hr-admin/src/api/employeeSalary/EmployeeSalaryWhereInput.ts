import { FiscalMonthWhereUniqueInput } from "../fiscalMonth/FiscalMonthWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmployeeSalaryWhereInput = {
  fiscalMonthId?: FiscalMonthWhereUniqueInput;
  id?: StringFilter;
  netSalary?: DecimalFilter;
  note?: StringNullableFilter;
  totalDeserved?: DecimalFilter;
  totalDiscount?: DecimalFilter;
};
