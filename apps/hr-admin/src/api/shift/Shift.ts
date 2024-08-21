import { Tenant } from "../tenant/Tenant";

export type Shift = {
  code: string | null;
  createdAt: Date;
  endTime: Date | null;
  id: number;
  isActive: boolean;
  name: string;
  nameNormalizedName: string;
  note: string | null;
  startTime: Date;
  tenantid?: Tenant | null;
  updatedAt: Date;
};
