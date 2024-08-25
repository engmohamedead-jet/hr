import { WorkOrderDependencyWhereInput } from "./WorkOrderDependencyWhereInput";
import { WorkOrderDependencyOrderByInput } from "./WorkOrderDependencyOrderByInput";

export type WorkOrderDependencyFindManyArgs = {
  where?: WorkOrderDependencyWhereInput;
  orderBy?: Array<WorkOrderDependencyOrderByInput>;
  skip?: number;
  take?: number;
};
