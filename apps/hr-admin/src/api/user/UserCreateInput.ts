import { InputJsonValue } from "../../types";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type UserCreateInput = {
  email: string;
  firstName?: string | null;
  isActive: boolean;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  tenantId?: TenantWhereUniqueInput | null;
  username: string;
};
