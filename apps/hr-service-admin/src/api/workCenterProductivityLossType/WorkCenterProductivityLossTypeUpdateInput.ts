import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterProductivityLossUpdateManyWithoutWorkCenterProductivityLossTypesInput } from "./WorkCenterProductivityLossUpdateManyWithoutWorkCenterProductivityLossTypesInput";

export type WorkCenterProductivityLossTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
  workCenterProductivityLosses?: WorkCenterProductivityLossUpdateManyWithoutWorkCenterProductivityLossTypesInput;
};
