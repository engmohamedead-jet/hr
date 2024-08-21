import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ApplicationCreateNestedManyWithoutApplicationDependenciesInput } from "./ApplicationCreateNestedManyWithoutApplicationDependenciesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ApplicationDependencyCreateInput = {
  applicationId?: ApplicationWhereUniqueInput | null;
  code?: string | null;
  dependsOnApplicationId?: ApplicationCreateNestedManyWithoutApplicationDependenciesInput;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
