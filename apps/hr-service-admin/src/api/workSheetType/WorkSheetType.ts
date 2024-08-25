import { Tenant } from "../tenant/Tenant";

export type WorkSheetType = {
  code: string | null;
  createdAt: Date;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
