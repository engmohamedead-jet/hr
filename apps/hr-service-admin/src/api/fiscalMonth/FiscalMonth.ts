import { BonusRequest } from "../bonusRequest/BonusRequest";
import { Tenant } from "../tenant/Tenant";

export type FiscalMonth = {
  bonusRequests?: BonusRequest | null;
  code: string | null;
  createdAt: Date;
  endsOn: Date;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  startsFrom: Date;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
