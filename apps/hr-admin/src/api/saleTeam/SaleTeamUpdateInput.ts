import { SalePersonUpdateManyWithoutSaleTeamsInput } from "./SalePersonUpdateManyWithoutSaleTeamsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SaleTeamUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string | null;
  note?: string | null;
  salePeople?: SalePersonUpdateManyWithoutSaleTeamsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
