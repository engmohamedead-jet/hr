import { Tenant } from "../tenant/Tenant";

export type ProductionAvailability = {
  code: string | null;
  createdAt: Date;
  id: number;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  tenantIId?: Tenant | null;
  updatedAt: Date;
};
