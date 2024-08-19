import { Application } from "../application/Application";
import { Tenant } from "../tenant/Tenant";

export type ApplicationDependency = {
  applicationId?: Application | null;
  code: string | null;
  createdAt: Date;
  dependsOnApplicationId?: Array<Application>;
  description: string | null;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
