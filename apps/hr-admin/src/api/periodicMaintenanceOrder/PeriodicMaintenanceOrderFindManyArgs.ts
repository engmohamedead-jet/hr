import { PeriodicMaintenanceOrderWhereInput } from "./PeriodicMaintenanceOrderWhereInput";
import { PeriodicMaintenanceOrderOrderByInput } from "./PeriodicMaintenanceOrderOrderByInput";

export type PeriodicMaintenanceOrderFindManyArgs = {
  where?: PeriodicMaintenanceOrderWhereInput;
  orderBy?: Array<PeriodicMaintenanceOrderOrderByInput>;
  skip?: number;
  take?: number;
};
