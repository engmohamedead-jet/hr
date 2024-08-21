import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ApplicationUpdateManyWithoutApplicationDependenciesInput } from "./ApplicationUpdateManyWithoutApplicationDependenciesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ApplicationDependencyUpdateInput = {
  applicationId?: ApplicationWhereUniqueInput | null;
  code?: string | null;
  dependsOnApplicationId?: ApplicationUpdateManyWithoutApplicationDependenciesInput;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
