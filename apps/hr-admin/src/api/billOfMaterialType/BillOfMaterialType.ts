import { BillOfMaterial } from "../billOfMaterial/BillOfMaterial";
import { Tenant } from "../tenant/Tenant";

export type BillOfMaterialType = {
  billOfMaterials?: Array<BillOfMaterial>;
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
