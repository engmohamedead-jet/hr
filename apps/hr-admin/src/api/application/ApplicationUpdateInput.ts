import { ApplicationDependencyWhereUniqueInput } from "../applicationDependency/ApplicationDependencyWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ApplicationUpdateInput = {
  DependsOnApplicationDependency?: ApplicationDependencyWhereUniqueInput | null;
  applicationDependency?: ApplicationDependencyWhereUniqueInput | null;
  code?: string | null;
  description?: string | null;
  i18nKey?: string;
  icon?: string | null;
  isActive?: boolean;
  landingUrl?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  publishedDateTime?: Date | null;
  publisher?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
  versionNumber?: string;
};
