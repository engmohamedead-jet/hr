import { TenantUserWhereInput } from "./TenantUserWhereInput";
import { TenantUserOrderByInput } from "./TenantUserOrderByInput";

export type TenantUserFindManyArgs = {
  where?: TenantUserWhereInput;
  orderBy?: Array<TenantUserOrderByInput>;
  skip?: number;
  take?: number;
};
