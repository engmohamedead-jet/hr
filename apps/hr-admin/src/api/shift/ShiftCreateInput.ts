import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ShiftCreateInput = {
  code?: string | null;
  endTime?: Date | null;
  isActive: boolean;
  name: string;
  nameNormalizedName: string;
  note?: string | null;
  startTime: Date;
  tenantid?: TenantWhereUniqueInput | null;
};
