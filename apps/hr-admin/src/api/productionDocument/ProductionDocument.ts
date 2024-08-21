import { Tenant } from "../tenant/Tenant";

export type ProductionDocument = {
  createdAt: Date;
  id: string;
  isActive: boolean;
  note: string | null;
  priority: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
