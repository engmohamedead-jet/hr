import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SaleTeamWhereUniqueInput } from "../saleTeam/SaleTeamWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalePersonWhereInput = {
  accountId?: AccountWhereUniqueInput;
  address?: StringNullableFilter;
  code?: StringNullableFilter;
  commissionRate?: DecimalNullableFilter;
  employeeId?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  phoneNumber?: StringNullableFilter;
  photo?: JsonFilter;
  saleTeamId?: SaleTeamWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput;
};
