import { EmployeeCreateNestedManyWithoutEmployeeGroupsInput } from "./EmployeeCreateNestedManyWithoutEmployeeGroupsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeGroupCreateInput = {
  code?: string | null;
  descripption?: string | null;
  employees?: EmployeeCreateNestedManyWithoutEmployeeGroupsInput;
  isActive?: boolean | null;
  name: string;
  normalziedName: string;
  note?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
