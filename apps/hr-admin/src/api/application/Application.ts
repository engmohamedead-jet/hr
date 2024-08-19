import { ApplicationDependency } from "../applicationDependency/ApplicationDependency";
import { Tenant } from "../tenant/Tenant";

export type Application = {
  DependsOnApplicationDependency?: ApplicationDependency | null;
  applicationDependency?: ApplicationDependency | null;
  code: string | null;
  createdAt: Date;
  description: string | null;
  i18nKey: string;
  icon: string | null;
  id: string;
  isActive: boolean;
  landingUrl: string | null;
  name: string;
  normalizedName: string;
  note: string | null;
  publishedDateTime: Date | null;
  publisher: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  versionNumber: string;
};
