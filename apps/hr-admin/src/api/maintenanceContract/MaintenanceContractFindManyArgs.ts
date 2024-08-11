import { MaintenanceContractWhereInput } from "./MaintenanceContractWhereInput";
import { MaintenanceContractOrderByInput } from "./MaintenanceContractOrderByInput";

export type MaintenanceContractFindManyArgs = {
  where?: MaintenanceContractWhereInput;
  orderBy?: Array<MaintenanceContractOrderByInput>;
  skip?: number;
  take?: number;
};
