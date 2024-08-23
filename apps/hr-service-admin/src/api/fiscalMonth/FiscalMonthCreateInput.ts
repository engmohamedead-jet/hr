import { BonusRequestWhereUniqueInput } from "../bonusRequest/BonusRequestWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type FiscalMonthCreateInput = {
  bonusRequests?: BonusRequestWhereUniqueInput | null;
  code?: string | null;
  endsOn: Date;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  startsFrom: Date;
  tenantId?: TenantWhereUniqueInput | null;
};
