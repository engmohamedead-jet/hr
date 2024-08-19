import { Resource } from "../resource/Resource";
import { Tenant } from "../tenant/Tenant";

export type ResourceType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  resources?: Array<Resource>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
