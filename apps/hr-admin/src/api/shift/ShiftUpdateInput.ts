import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ShiftUpdateInput = {
  code?: string | null;
  endTime?: Date | null;
  isActive?: boolean;
  name?: string;
  nameNormalizedName?: string;
  note?: string | null;
  startTime?: Date;
  tenantid?: TenantWhereUniqueInput | null;
};
