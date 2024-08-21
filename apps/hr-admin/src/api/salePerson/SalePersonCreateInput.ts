import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { Decimal } from "decimal.js";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SaleTeamWhereUniqueInput } from "../saleTeam/SaleTeamWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalePersonCreateInput = {
  accountId?: AccountWhereUniqueInput | null;
  address?: string | null;
  code?: string | null;
  commissionRate?: Decimal | null;
  employeeId?: EmployeeWhereUniqueInput | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  phoneNumber?: string | null;
  photo?: InputJsonValue;
  saleTeamId: SaleTeamWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput | null;
};
