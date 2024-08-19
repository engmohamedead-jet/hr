import { SalePerson } from "../salePerson/SalePerson";
import { Tenant } from "../tenant/Tenant";

export type SaleTeam = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string | null;
  note: string | null;
  salePeople?: Array<SalePerson>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
