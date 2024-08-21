import { ResourceType } from "../resourceType/ResourceType";
import { Tenant } from "../tenant/Tenant";
import { Decimal } from "decimal.js";

export type Resource = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  resourceTypeId?: ResourceType | null;
  tenantId?: Tenant | null;
  timeEfficiency: Decimal | null;
  updatedAt: Date;
};
