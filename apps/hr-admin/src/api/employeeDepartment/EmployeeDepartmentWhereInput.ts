import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeDepartmentListRelationFilter } from "./EmployeeDepartmentListRelationFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { EmployeeDepartmentWhereUniqueInput } from "./EmployeeDepartmentWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeDepartmentWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  employeeDepartments?: EmployeeDepartmentListRelationFilter;
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  parentEmployeeDepartmentId?: EmployeeDepartmentWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput;
};
