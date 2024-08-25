import { EmployeeUpdateManyWithoutEmployeeGroupsInput } from "./EmployeeUpdateManyWithoutEmployeeGroupsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeGroupUpdateInput = {
  code?: string | null;
  descripption?: string | null;
  employees?: EmployeeUpdateManyWithoutEmployeeGroupsInput;
  isActive?: boolean | null;
  name?: string;
  normalziedName?: string;
  note?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
