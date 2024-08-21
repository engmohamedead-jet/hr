import { Account } from "../account/Account";
import { Decimal } from "decimal.js";
import { Employee } from "../employee/Employee";
import { JsonValue } from "type-fest";
import { SaleTeam } from "../saleTeam/SaleTeam";
import { Tenant } from "../tenant/Tenant";

export type SalePerson = {
  accountId?: Account | null;
  address: string | null;
  code: string | null;
  commissionRate: Decimal | null;
  createdAt: Date;
  employeeId?: Employee | null;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  phoneNumber: string | null;
  photo: JsonValue;
  saleTeamId?: SaleTeam;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
