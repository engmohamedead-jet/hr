import { CheckInOutCreateNestedManyWithoutMachinesInput } from "./CheckInOutCreateNestedManyWithoutMachinesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type MachineCreateInput = {
  checkInOuts?: CheckInOutCreateNestedManyWithoutMachinesInput;
  code?: string | null;
  ip?: string | null;
  isAndroid: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
