import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterProductivityLossCreateNestedManyWithoutWorkCenterProductivityLossTypesInput } from "./WorkCenterProductivityLossCreateNestedManyWithoutWorkCenterProductivityLossTypesInput";

export type WorkCenterProductivityLossTypeCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
  workCenterProductivityLosses?: WorkCenterProductivityLossCreateNestedManyWithoutWorkCenterProductivityLossTypesInput;
};
