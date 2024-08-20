import { Tenant } from "../tenant/Tenant";

export type SettingGroup = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
