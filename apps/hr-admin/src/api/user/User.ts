import { JsonValue } from "type-fest";
import { Tenant } from "../tenant/Tenant";

export type User = {
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  isActive: boolean;
  lastName: string | null;
  roles: JsonValue;
  tenantId?: Tenant | null;
  updatedAt: Date;
  username: string;
};
