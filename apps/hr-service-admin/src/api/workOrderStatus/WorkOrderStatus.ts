import { Tenant } from "../tenant/Tenant";

export type WorkOrderStatus = {
  code: string | null;
  createdAt: Date;
  id: number;
  isActive: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
