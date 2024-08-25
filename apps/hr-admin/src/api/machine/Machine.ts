import { CheckInOut } from "../checkInOut/CheckInOut";
import { Tenant } from "../tenant/Tenant";

export type Machine = {
  checkInOuts?: Array<CheckInOut>;
  code: string | null;
  createdAt: Date;
  id: string;
  ip: string | null;
  isAndroid: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
