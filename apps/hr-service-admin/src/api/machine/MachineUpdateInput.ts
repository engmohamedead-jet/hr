import { CheckInOutUpdateManyWithoutMachinesInput } from "./CheckInOutUpdateManyWithoutMachinesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type MachineUpdateInput = {
  checkInOuts?: CheckInOutUpdateManyWithoutMachinesInput;
  code?: string | null;
  ip?: string | null;
  isAndroid?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
