import { SalePersonCreateNestedManyWithoutSaleTeamsInput } from "./SalePersonCreateNestedManyWithoutSaleTeamsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SaleTeamCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName?: string | null;
  note?: string | null;
  salePeople?: SalePersonCreateNestedManyWithoutSaleTeamsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
