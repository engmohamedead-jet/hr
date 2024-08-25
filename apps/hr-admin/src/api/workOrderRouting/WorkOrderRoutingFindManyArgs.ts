import { WorkOrderRoutingWhereInput } from "./WorkOrderRoutingWhereInput";
import { WorkOrderRoutingOrderByInput } from "./WorkOrderRoutingOrderByInput";

export type WorkOrderRoutingFindManyArgs = {
  where?: WorkOrderRoutingWhereInput;
  orderBy?: Array<WorkOrderRoutingOrderByInput>;
  skip?: number;
  take?: number;
};
