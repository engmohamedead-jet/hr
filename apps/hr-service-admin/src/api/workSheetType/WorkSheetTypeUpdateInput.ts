import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type WorkSheetTypeUpdateInput = {
  code?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
